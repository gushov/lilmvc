provide('lilmvc/view', function (require, module, exports) {

 /*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */

var LilObj = require('lilobj');

module.exports = LilObj.extend({

  construct: function (bus, selector) {
    this.el = this.attach(selector);
    this.init(bus);
  },

  template: function (viewObj) {
    return viewObj;
  },

  attach: function (selector) {
    return null;
  },

  init: function (bus) {}

});


}, true);
provide('lilmvc/controller', function (require, module, exports) {

/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */

var LilObj = require('lilobj');
var LilBus = require('./bus');

module.exports = LilObj.extend({

  events: [],

  construct: function (view, selector) {

    this.bus = LilBus.create(this.events);
    this.view = view.create(this.bus, selector);
    this.init(this.bus);

  },

  init: function (bus) {}

});


}, true);
provide('lilmvc/bus', function (require, module, exports) {

/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */

var LilObj = require('lilobj');
var _ = require('lil_');

module.exports = LilObj.extend({

  construct: function (events) {

    this.listeners = {};
    var ev = this.ev = {};

    _.each(events, function (event) {
      ev[event] = event;
    });

  },

  on: function (event, method) {

    if (this.listeners[event]) {
      this.listeners[event].push(method);
    } else {
      this.listeners[event] = [method];
    }

  },

  emit: function (event, payload) {

    _.each(this.listeners[event], function (method) {
      method(payload);
    });

  }

});


}, true);
provide('lilmvc', function (require, module, exports) {

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


}, true);
