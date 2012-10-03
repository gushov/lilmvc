/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */

(function (ctx, ctxModule) {

  "use strict";

  function each(arr, func, ctx) {

    if (arr && arr.length) {
      arr.forEach(func, ctx);
    }

  }

  function eachIn(obj, func) {

    var keys = Object.keys(obj) || [];

    keys.forEach(function (name, i) {
      func(name, obj[name], i);
    });

  }

  var LilObj = {

    extend: function (props) {

      var result = Object.create(this);

      eachIn(props, function (name, value) {
        result[name] = value;
      });

      return result;

    },

    create: function () {

      var object = Object.create(this);

      if (object.construct !== undefined) {
        object.construct.apply(object, arguments);
      }

      return object;

    }

  };

  var LilBus = LilObj.extend({

    construct: function (events) {

      this.listeners = {};
      var ev = this.ev = {};

      each(events, function (event) {
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

      each(this.listeners[event], function (method) {
        method(payload);
      });

    }

  });

  var LilModel = LilObj.extend({

  });

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

  var LilController = LilObj.extend({

    events: [],

    construct: function (view, selector) {

      this.bus = LilBus.create(this.events);
      this.view = view.create(this.bus, selector);
      this.init(this.bus);

    },

    init: function (bus) {}

  });

  var provide, modules = {};

  if (typeof provide !== 'function' ) {

    if (ctxModule) {

      provide = function (name, module) {
        ctxModule.exports = module;
      };

    } else {

      ctx.provide = provide = function (name, module) {
        modules[name] = module;
      };

      ctx.require = function (name) {
        return modules[name];
      };

    }

  }

  provide('lilmvc', {
    LilObj: LilObj,
    LilBus: LilBus,
    LilModel: LilModel,
    LilView: LilView,
    LilController: LilController
  });

}(this, typeof module !== 'undefined' ? module : undefined));