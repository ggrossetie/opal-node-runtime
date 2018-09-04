var Opal = require('../src/index').Opal;

describe('Opal Node Runtime', function () {

  describe('When loaded', function() {
    it('should be instantiated', function() {
      expect(Opal).not.toBe(null);
    });

    it('should preserve Function methods', function() {
      expect(Function.call).toBeDefined();
      expect(Function.apply).toBeDefined();
      expect(Function.bind).toBeDefined();
    });
  });

  describe('When pathname module is loaded', function() {
    it('should resolve Pathname methods', function() {
      Opal.load('pathname');
      var Pathname = Opal.const_get_relative([], 'Pathname');
      var path1 = Pathname.$new('/foo/bar');
      var path2 = Pathname.$new('qux');
      expect(path1['$+'](path2)['$to_path']()).toBe('/foo/bar/qux');
    });
  });

  describe('When nodejs module is loaded', function() {
    it('should resolve Node.js specific implementations', function() {
      Opal.load('nodejs');
      var Dir = Opal.const_get_relative([], 'Dir');
      var currentDir = Dir['$pwd']();
      expect(currentDir).toBe(process.cwd());
    });
  });
});
