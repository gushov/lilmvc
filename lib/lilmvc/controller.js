/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */

var obj = require('lilobj').obj;
var _ = require('lil_');
var Bus = require('./bus');

module.exports = obj.extend({

  events: [],
  views: {},

  construct: function (views) {

    this.bus = Bus.create(this.events);

    _.eachIn(views, function (selector, view) {
      this.views[selector] = view.create(this.bus, selector);
    }, this);

    this.init(this.bus);

  },

  init: function (bus) {}

});
