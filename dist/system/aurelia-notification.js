'use strict';

System.register(['./notification', './config'], function (_export, _context) {
  var Notification, Config;


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

      _export('configure', configure);
    }
  };
});