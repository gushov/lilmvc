/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */
/*global assert */

var buster = typeof buster !== 'undefined' ? buster : require("buster");
var LilController = require('../lib/lilcontroller', 'lilcontroller');

buster.testCase("LilController", {

  "creates view with bus": function () {

    var createSpy = this.spy();
    var initSpy = this.spy();
    var view = { create: createSpy };

    var KidController = LilController.extend({

      events: [
        'WAKE_UP',
        'FEED',
        'PUT_TO_BED'
      ],

      init: initSpy

    });

    var kidController = KidController.create(view, '.iver');

    assert.calledWith(createSpy,  kidController.bus, '.iver');
    assert.calledWith(initSpy,  kidController.bus);
    assert.equals(kidController.bus.ev.WAKE_UP, 'WAKE_UP');
    assert.equals(kidController.bus.ev.FEED, 'FEED');
    assert.equals(kidController.bus.ev.PUT_TO_BED, 'PUT_TO_BED');

  }

});