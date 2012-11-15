provide('lilobj', function (require, module, exports) {

/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */

var _ = require('lil_');

module.exports = {

  extend: function (props) {

    var result = Object.create(this);

    _.eachIn(props, function (name, value) {
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


}, true);
