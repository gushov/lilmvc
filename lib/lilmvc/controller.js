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