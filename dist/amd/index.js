define(['exports', './config', './notification'], function (exports, _config, _notification) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;
  Object.defineProperty(exports, 'Notification', {
    enumerable: true,
    get: function get() {
      return _notification.Notification;
    }
  });

  function configure(aurelia, config) {
    return config(aurelia.container.get(_config.Config));
  }
});