/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */
/*global assert */

var buster = typeof buster !== 'undefined' ? buster : require("buster");
var lilmvc = typeof module !== 'undefined' ? require('../lib/lilmvc') : require('lilmvc');
var LilBus = lilmvc.bus;

buster.testCase("LilBus", {

  "listens to correct events": function () {

    var yellowSpy = this.spy();
    var blueSpy = this.spy();

    var yellowBus = LilBus.create([
      'START',
      'STOP'
    ]);

    var blueBus = LilBus.create([
      'START',
      'STOP'
    ]);

    yellowBus.on(yellowBus.ev.START, yellowSpy);
    yellowBus.emit(yellowBus.ev.START, { a: 'thing' });
    yellowBus.emit(yellowBus.ev.STOP, {});

    blueBus.on(blueBus.ev.START, blueSpy);
    blueBus.on(blueBus.ev.STOP, blueSpy);
    blueBus.emit(blueBus.ev.START, { an: 'apple' });
    blueBus.emit(blueBus.ev.STOP, { a: 'pear' });

    assert.calledOnce(yellowSpy);
    assert.calledWith(yellowSpy, { a: 'thing' });

    assert.calledTwice(blueSpy);
    assert.calledWith(blueSpy, { an: 'apple' });
    assert.calledWith(blueSpy, { a: 'pear' });
  }

});
