const chai = require('chai')
const expect = chai.expect

describe('When an incompatible version of Opal is loaded', function () {
  it('should throw an error', function () {
    // fake an already loaded Opal runtime using version 0.10
    globalThis.Opal = {}
    globalThis.Opal.$$ = {
      'RUBY_ENGINE_VERSION': '0.10'
    }
    expect(() => require('../../src/index').Opal)
      .to.throw('Opal is already loaded and version 0.10 is not compatible with 0.11. Please upgrade Asciidoctor.js to the latest version.')
  })
})
