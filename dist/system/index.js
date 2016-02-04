System.register(['./config', './notification'], function (_export) {
  'use strict';

  var Config;

  _export('configure', configure);

  function configure(aurelia, config) {
    return config(aurelia.container.get(Config));
  }

  return {
    setters: [function (_config) {
      Config = _config.Config;
    }, function (_notification) {
      _export('Notification', _notification.Notification);
    }],
    execute: function () {}
  };
});