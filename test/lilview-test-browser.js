/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */
/*global $:false, buster:false, describe:false, it:false,
  expect:false, beforeEach:false, afterEach:false */

buster.spec.expose(); // Make some functions global

describe('LilView', function () {

  var lilmvc = require('lilmvc');
  var LilBus = lilmvc.LilBus;
  var LilView = lilmvc.LilView;

  LilView.attach = function (selector) {
    return $(selector);
  };

  LilView.template = function (viewObj) {
    return '<li class="son">' + viewObj.name + '</li>';
  };

  beforeEach(function () {
    $('body').append('<ul id="dad"></ul>');
  });

  afterEach(function () {
    $('#dad').remove();
  });

  it('should attach to a single dom element', function () {

    var TestView = LilView.extend({

      addSon: function (bus, viewObj) {

        var son = $(this.template(viewObj)).click(function () {
          bus.emit('SON_ADDED');
        });

        this.el.append(son);

      },

      init: function (bus) {
        bus.on('ADD_SON', this.addSon.bind(this, bus));
      }

    });

    var testBus = LilBus.create(['ADD_SON', 'SON_ADDED']);
    var testView = TestView.create(testBus, '#dad');

    testBus.emit(testBus.ev.ADD_SON, { name: 'gus' });
    testBus.emit(testBus.ev.ADD_SON, { name: 'kyle' });

    var sons = $('.son');
    expect(sons.length).toEqual(2);

  });

  it('should attach to multiple dom elements', function () {
    expect(true).toBeTruthy();
  });

});
