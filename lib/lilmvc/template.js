/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */

var template = function (id, viewObj) {
  return viewObj;
};

module.exports = function (handler) {

  if (handler) { template = handler; }
  return template;

};