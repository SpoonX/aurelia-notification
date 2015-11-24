System.register(['wavded/humane-js', 'aurelia-framework', 'aurelia-i18n'], function (_export) {
  'use strict';

  var humane, inject, I18N, Notification;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_wavdedHumaneJs) {
      humane = _wavdedHumaneJs['default'];
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaI18n) {
      I18N = _aureliaI18n.I18N;
    }],
    execute: function () {
      Notification = (function () {
        function Notification(humane, i18n) {
          _classCallCheck(this, _Notification);

          this.humane = humane;
          this.i18n = i18n;
        }

        _createClass(Notification, [{
          key: 'success',
          value: function success(message) {
            this.humane.log(this.i18n.tr(message), { addnCls: 'success' });
          }
        }, {
          key: 'error',
          value: function error(message) {
            this.humane.log(this.i18n.tr(message), { addnCls: 'error' });
          }
        }]);

        var _Notification = Notification;
        Notification = inject(humane, I18N)(Notification) || Notification;
        return Notification;
      })();

      _export('Notification', Notification);
    }
  };
});