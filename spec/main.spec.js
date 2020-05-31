import chai from 'chai'
import dirtyChai from 'dirty-chai'
import 'mocha'
import { Opal } from '../src/index.js'

chai.use(dirtyChai)
const expect = chai.expect

const fundamentalObjects = [
  Function,
  Boolean,
  Error,
  Number,
  Date,
  String,
  RegExp,
  Array
]

// Save the current value of toString() for each object, before the import of Opal
const fundamentalToStringValues = []
for (const index in fundamentalObjects) {
  const fundamentalObject = fundamentalObjects[index]
  fundamentalToStringValues.push(fundamentalObject.toString())
}

describe('Opal Node Runtime', function () {
  describe('When loaded', function () {
    it('should export Opal object', function () {
      expect(Opal).not.be.null()
    })

    it('should preserve Function methods', function () {
      for (const index in fundamentalObjects) {
        const fundamentalObject = fundamentalObjects[index]
        expect(fundamentalObject.call, `${fundamentalObject.name}.call should be a Function`).to.be.an.instanceof(Function)
        expect(fundamentalObject.apply, `${fundamentalObject.name}.apply should be a Function`).to.be.an.instanceof(Function)
        expect(fundamentalObject.bind, `${fundamentalObject.name}.bind should be a Function`).to.be.an.instanceof(Function)
        expect(fundamentalObject.toString(), `${fundamentalObject.name}.toString should be native function`).to.be.equal(fundamentalToStringValues[index])
        expect(fundamentalObject.toString()).to.equal(`function ${fundamentalObject.name}() { [native code] }`)
      }
    })
  })

  describe('When pathname module is loaded', function () {
    it('should register Pathname methods', function () {
      Opal.load('pathname')
      const Pathname = Opal.const_get_relative([], 'Pathname')
      const path1 = Pathname.$new('/foo/bar')
      const path2 = Pathname.$new('qux')
      expect(path1['$+'](path2).$to_path()).to.equal('/foo/bar/qux')
    })
  })

  describe('When nodejs module is loaded', function () {
    it('should register Node.js specific implementations', function () {
      Opal.load('nodejs')
      const Dir = Opal.const_get_relative([], 'Dir')
      const currentDir = Dir.$pwd()
      expect(currentDir).to.equal(process.cwd().replace(/\\/g, '/'))
    })
  })
})
