 /*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */

var obj = require('lilobj').obj;
var template = require('./template');
var dom = require('./dom');

module.exports = obj.extend({

  construct: function (bus, selector) {
    this.$ = dom();
    this.el = this.$(selector);
    this.init(bus);
  },

  template: function (id, viewObj) {
    var engine = template();
    return engine(id, viewObj);
  },

  init: function (bus) {}

});
