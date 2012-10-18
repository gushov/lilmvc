/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */
/*global provide */

(function (provide) {

  var LilObj = require('lilobj');
  var _ = require('lil_');

  var LilBus = LilObj.extend({

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

  provide('lilbus', LilBus);

}(typeof module !== 'undefined' ?
    function (a, b) { module.exports = b; } :
    provide));