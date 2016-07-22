'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaNotification = require('./aurelia-notification');

Object.keys(_aureliaNotification).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaNotification[key];
    }
  });
});