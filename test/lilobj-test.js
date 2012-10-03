/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */
/*global assert */

var buster = typeof buster !== 'undefined' ? buster : require("buster");
var lilmvc = typeof module === 'undefined' ? require('lilmvc') : require('../lib/lilmvc');

buster.testCase("LilObj", {

    "extends and creates objects": function () {

      var LilObj = lilmvc.LilObj;

      var Parent = LilObj.extend({
        type: null,
        construct: function (name) {
          this.name = name;
        },
        hey: function () {
          return this.type + ' here';
        }
      });

      var Dad = Parent.extend({
        type: 'Dad'
      });

      var Mom = Parent.extend({
        type: 'Mom'
      });

      var jayz = Dad.create('jay-z');
      var gus = Dad.create('gus');
      var gaga = Mom.create('gaga');

      assert.equals(jayz.type, 'Dad');
      assert.equals(jayz.name, 'jay-z');
      assert.equals(jayz.hey(), 'Dad here');
      assert.equals(gus.type, 'Dad');
      assert.equals(gus.name, 'gus');
      assert.equals(gus.hey(), 'Dad here');
      assert.equals(gaga.type, 'Mom');
      assert.equals(gaga.name, 'gaga');
      assert.equals(gaga.hey(), 'Mom here');

    }

});
