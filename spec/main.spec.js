const chai = require('chai');
const expect = chai.expect;

const fundamentalObjects = [
  Function,
  Boolean,
  Error,
  Number,
  Date,
  String,
  RegExp,
  Array
];

// Save the current value of toString() for each object, before the import of Opal
const fundamentalToStringValues = []
for (let index in fundamentalObjects) {
  const fundamentalObject = fundamentalObjects[index];
  fundamentalToStringValues.push(fundamentalObject.toString());
}

const Opal = require('../src/index').Opal;

describe('Opal Node Runtime', function () {

  describe('When loaded', function() {
    it('should export Opal object', function() {
      expect(Opal).not.be.null;
    });

    it('should preserve Function methods', function() {

      for (let index in fundamentalObjects) {
        const fundamentalObject = fundamentalObjects[index];
        expect(fundamentalObject.call, `${fundamentalObject.name}.call should be a Function`).to.be.an.instanceof(Function);
        expect(fundamentalObject.apply, `${fundamentalObject.name}.apply should be a Function`).to.be.an.instanceof(Function);
        expect(fundamentalObject.bind, `${fundamentalObject.name}.bind should be a Function`).to.be.an.instanceof(Function);
        expect(fundamentalObject.toString(), `${fundamentalObject.name}.toString should be native function`).to.be.equal(fundamentalToStringValues[index]);
        expect(fundamentalObject.toString()).to.equal(`function ${fundamentalObject.name}() { [native code] }`);
      }
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
      expect(currentDir).to.equal(process.cwd().replace(/\\/g, '/'));
    });
  });
});
