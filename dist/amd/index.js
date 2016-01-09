define(['exports', './notification', './config'], function (exports, _notification, _config) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;
  exports.Notification = _notification.Notification;

  function configure(aurelia, config) {
    return config(aurelia.container.get(_config.Config));
  }
});