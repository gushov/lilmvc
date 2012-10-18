 /*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */
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