export default {
  input: 'src/index.js',
  output: {
    file: 'src/index.cjs',
    format: 'cjs',
  },
  external: [ 'fs', 'glob', 'os', 'path', 'unxhr', 'util' ]
}
