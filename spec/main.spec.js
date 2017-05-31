var Opal = require('../src/index').Opal;

describe('Opal node runtime', function () {

  describe('When loaded', function() {
    it('Opal should not be null', function() {
      expect(Opal).not.toBe(null);
    });

    it('Pathname methods should be available', function() {
      Opal.load('pathname');
      var Pathname = Opal.const_get_relative([], 'Pathname');
      var path1 = Pathname.$new('/foo/bar');
      var path2 = Pathname.$new('qux');
      expect(path1['$+'](path2)['$to_path']()).toBe('/foo/bar/qux');
    });

    it('Node.js specific implementations should be available', function() {
      Opal.load('nodejs');
      var Dir = Opal.const_get_relative([], 'Dir');
      var currentDir = Dir['$pwd']();
      expect(currentDir).toBe(process.cwd());
    });
  });
});
