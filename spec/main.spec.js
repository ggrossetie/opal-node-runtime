const chai = require('chai');
const expect = chai.expect;

const Opal = require('../src/index').Opal;

describe('Opal Node Runtime', function () {

  describe('When loaded', function() {
    it('should export Opal object', function() {
      expect(Opal).not.be.null;
    });

    it('should preserve Function methods', function() {
      expect(Function.call).to.be.an.instanceof(Function);
      expect(Function.apply).to.be.an.instanceof(Function);
      expect(Function.bind).to.be.an.instanceof(Function);
    });
  });

  describe('When pathname module is loaded', function() {
    it('should register Pathname methods', function() {
      Opal.load('pathname');
      var Pathname = Opal.const_get_relative([], 'Pathname');
      var path1 = Pathname.$new('/foo/bar');
      var path2 = Pathname.$new('qux');
      expect(path1['$+'](path2)['$to_path']()).to.equal('/foo/bar/qux');
    });
  });

  describe('When nodejs module is loaded', function() {
    it('should register Node.js specific implementations', function() {
      Opal.load('nodejs');
      var Dir = Opal.const_get_relative([], 'Dir');
      var currentDir = Dir['$pwd']();
      expect(currentDir).to.equal(process.cwd());
    });
  });
});
