'use strict';

exports.__esModule = true;

var _aureliaNotification = require('./aurelia-notification');

Object.keys(_aureliaNotification).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaNotification[key];
    }
  });
});