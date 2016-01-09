System.register(['./notification', './config'], function (_export) {
  'use strict';

  var Notification, Config;

  _export('configure', configure);

  function configure(aurelia, config) {
    return config(aurelia.container.get(Config));
  }

  return {
    setters: [function (_notification) {
      Notification = _notification.Notification;
    }, function (_config) {
      Config = _config.Config;
    }],
    execute: function () {
      _export('Notification', Notification);
    }
  };
});