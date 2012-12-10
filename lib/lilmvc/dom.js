/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */

var $ = function (stuff) {
  return this;
};

module.exports = function (handler) {

  if (handler) { $ = handler; }
  return $;

};
