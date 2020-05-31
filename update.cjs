const fs = require('fs')
const path = require('path')
const execSync = require('child_process').execSync

const opalDirectory = path.resolve('../opal')
const args = process.argv.slice(2)
const opalSha1 = args[0]

if (process.env.SKIP_BUILD) {
  // Skip build
  console.log('SKIP_BUILD environment variable is true, skipping "build" task')
} else {
  if (!opalSha1) {
    console.error('Please specify a sha1/tag to build Opal')
    process.exit(9)
  }
  console.log(`Building ${opalDirectory}@${opalSha1}`)
  execSync(`git checkout ${opalSha1}`, { cwd: opalDirectory })
  execSync(`bundle exec rake dist`, { cwd: opalDirectory })
}

// copy
const files = ['nodejs.js', 'opal.js', 'pathname.js', 'stringio.js']
for (const file of files) {
  console.log(`Copy ${opalDirectory}/build/${file} to src/${file}`)
  fs.copyFileSync(`${opalDirectory}/build/${file}`, `src/${file}`)
}

const opalSourceFile = `src/opal.js`
const opalSource = fs.readFileSync(opalSourceFile, 'utf8')
if (!opalSource.includes('export default Opal')) {
  const data = opalSource + `

export default Opal
`
  fs.writeFileSync(opalSourceFile, data, 'utf8')
}

const nodejsSourceFile = `src/nodejs.js`
const nodejsSource = fs.readFileSync(nodejsSourceFile, 'utf8')
if (!nodejsSource.includes('import __fs__ from \'fs\';')) {
  const data = nodejsSource
    .replace('\r\n', '\n')
    .replace(/self\.__xmlhttprequest__ = require\('unxhr'\);/g, 'self.__xmlhttprequest__ = __xmlhttprequest__;')
    // path
    .replace(/self\.__path__ = require\('path'\);/g, 'self.__path__ = __path__;')
    .replace(/\s+var __path__ = self\.__path__;/g, '')
    // fs
    .replace(/self\.__fs__ = require\('fs'\);/g, 'self.__fs__ = __fs__;')
    .replace(/\s+var __fs__ = self\.__fs__;/g, '')
    // util
    .replace(/self\.__util__ = require\('util'\);/g, 'self.__util__ = __util__;')
    .replace(/\s+var __util__ = self\.__util__;/g, '')
    // glob
    .replace(/self\.__glob__ = require\('glob'\);/g, 'self.__glob__ = __glob__;')
    .replace(/\s+var __glob__ = self\.__glob__;/g, '')
    // os
    .replace(/self\.__os__ = require\('os'\);/g, 'self.__os__ = __os__;')
    .replace(/\s+var __os__ = self\.__os__;/g, '')
    .replace(/\s+self\.\$require\("nodejs\/kernel"\);/g, '')
    .replace(/\/\*[^*]+\*\/\nOpal\.modules\["nodejs\/kernel"] = function\(Opal\) {.+?(?=};)};/gs, '')
  fs.writeFileSync(nodejsSourceFile, `import __fs__ from 'fs';
import __path__ from 'path';
import __util__ from 'util';
import __glob__ from 'glob';
import __os__ from 'os';
import __xmlhttprequest__ from 'unxhr';

${data}
`)
}
