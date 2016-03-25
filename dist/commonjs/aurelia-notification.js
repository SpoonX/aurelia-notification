'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = exports.Notification = undefined;

var _notification = require('./notification');

var _config = require('./config');

function configure(aurelia, config) {
  return config(aurelia.container.get(_config.Config));
}

exports.Notification = _notification.Notification;
exports.configure = configure;