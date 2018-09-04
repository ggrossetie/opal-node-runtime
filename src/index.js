/* global Opal */
var functionCall = Function.call;
var functionApply = Function.apply;
var functionBind = Function.bind;
require('./opal.js');
// restore Function methods (see https://github.com/opal/opal/issues/1846)
Function.call = functionCall;
Function.apply = functionApply;
Function.bind = functionBind;
require('./nodejs.js');
require('./pathname.js');
require('./base64.js');
require('./open-uri.js');
require('./stringio.js');

module.exports.Opal = Opal;
