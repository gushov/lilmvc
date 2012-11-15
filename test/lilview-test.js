/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */
/*global assert */

var buster = typeof buster !== 'undefined' ? buster : require("buster");
var lilmvc = typeof module !== 'undefined' ? require('../lib/lilmvc') : require('lilmvc');
var LilView = lilmvc.view;

buster.testCase("LilView", {

  "should call static methods": function () {

    var attachSpy = this.spy();
    var templateSpy = this.spy();

    LilView.attach = attachSpy;
    LilView.template = templateSpy;

    var TestView = LilView.extend({

      init: function (bus) {
        assert.same(bus, 'FAKE_BUS');
        this.doSomething();
      },

      doSomething: function () {
        this.template('VIEW_OBJECT');
      }

    });

    var testView = TestView.create('FAKE_BUS', '.selector');

    assert.calledWith(attachSpy, '.selector');
    assert.calledWith(templateSpy, 'VIEW_OBJECT');

  }

});