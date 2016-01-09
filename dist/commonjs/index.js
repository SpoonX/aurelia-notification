'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.configure = configure;

var _notification = require('./notification');

var _config = require('./config');

exports.Notification = _notification.Notification;

function configure(aurelia, config) {
  return config(aurelia.container.get(_config.Config));
}