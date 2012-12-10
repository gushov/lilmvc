/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */

var obj = require('lilobj').obj;
var _ = require('lil_');

module.exports = obj.extend({

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
