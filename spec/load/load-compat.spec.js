const chai = require('chai')
const expect = chai.expect

describe('When an compatible version of Opal is loaded', function () {
  it('should return the already loaded instance', function () {
    // fake an already loaded Opal runtime using version 0.10
    globalThis.Opal = {}
    globalThis.Opal.$$ = {
      'RUBY_ENGINE_VERSION': '0.11'
    }
    globalThis.Opal.__INSTANCE__ = 'a1b2c3'
    const Opal = require('../../src/index').Opal
    expect(Opal.$$['RUBY_ENGINE_VERSION']).to.equal('0.11')
    expect(Opal.__INSTANCE__).to.equal('a1b2c3')
  })
})
