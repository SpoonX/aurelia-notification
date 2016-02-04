'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.configure = configure;

var _config = require('./config');

var _notification = require('./notification');

Object.defineProperty(exports, 'Notification', {
  enumerable: true,
  get: function get() {
    return _notification.Notification;
  }
});

function configure(aurelia, config) {
  return config(aurelia.container.get(_config.Config));
}