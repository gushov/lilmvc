/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */

var dom = require('./lilmvc/dom');
var template = require('./lilmvc/template');
var bus = require('./lilmvc/bus');
var controller = require('./lilmvc/controller');
var view = require('./lilmvc/view');
var lilmodel = require('lilmodel');
var lilrouter = require('lilrouter');

module.exports = {
  template: template,
  dom: dom,
  bus: bus,
  controller: controller,
  view: view,
  syncr: lilmodel.syncr,
  model: lilmodel.model,
  collection: lilmodel.collection,
  router: lilrouter
};
