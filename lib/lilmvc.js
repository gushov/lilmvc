/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */

var bus = require('./lilmvc/bus');
var controller = require('./lilmvc/controller');
var view = require('./lilmvc/view');

module.exports = {
  bus: bus,
  controller: controller,
  view: view
};
