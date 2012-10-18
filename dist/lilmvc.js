/*! lilmvc - v0.0.0 - 2012-10-19
 * Copyright (c) 2012 August Hovland; Licensed MIT */

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
/*global provide */

(function (provide) {

  var LilObj = require('lilobj');

  var LilView = LilObj.extend({

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

  provide('lilview', LilView);

}(typeof module !== 'undefined' ?
    function (a, b) { module.exports = b; } :
    provide));
/*global provide */

(function (provide) {

  var LilObj = require('lilobj');
  var LilBus = require('./lilbus', 'lilbus');

  var LilController = LilObj.extend({

    events: [],

    construct: function (view, selector) {

      this.bus = LilBus.create(this.events);
      this.view = view.create(this.bus, selector);
      this.init(this.bus);

    },

    init: function (bus) {}

  });

  provide('lilcontroller', LilController);

}(typeof module !== 'undefined' ?
    function (a, b) { module.exports = b; } :
    provide));