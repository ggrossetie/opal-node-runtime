/* global Opal */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#Fundamental_objects
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
const backup = {};
for (let index in fundamentalObjects) {
  const fundamentalObject = fundamentalObjects[index];
  backup[fundamentalObject.name] = {
    call: fundamentalObject.call,
    apply: fundamentalObject.apply,
    bind: fundamentalObject.bind,
    toString: fundamentalObject.toString
  }
}
require('./opal.js');
// restore Function methods (see https://github.com/opal/opal/issues/1846)
for (let index in fundamentalObjects) {
  const fundamentalObject = fundamentalObjects[index];
  const name = fundamentalObject.name;
  if (typeof fundamentalObject.call !== 'function') {
    fundamentalObject.call = backup[name].call;
  }
  if (typeof fundamentalObject.apply !== 'function') {
    fundamentalObject.apply = backup[name].apply;
  }
  if (typeof fundamentalObject.bind !== 'function') {
    fundamentalObject.bind = backup[name].bind;
  }
  if (backup[name].toString) {
    fundamentalObject.toString = backup[name].toString;
  }
}
require('./nodejs.js');
require('./pathname.js');
require('./base64.js');
require('./open-uri.js');
require('./stringio.js');

module.exports.Opal = Opal;
