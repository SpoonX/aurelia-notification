define(['exports', 'wavded/humane-js', 'aurelia-framework', 'aurelia-i18n', 'aurelia-dependency-injection'], function (exports, _wavdedHumaneJs, _aureliaFramework, _aureliaI18n, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _humane2 = _interopRequireDefault(_wavdedHumaneJs);

  var Notification = (function () {
    function Notification(_humane, i18n) {
      _classCallCheck(this, _Notification);

      this.humane = _humane;
      this.i18n = i18n;
    }

    _createClass(Notification, [{
      key: 'log',
      value: function log(message, options) {
        if (this.i18n && this.i18n.i18next.isInitialized()) {
          message = this.i18n.tr(message);
        }

        this.humane.log(message, options);
      }
    }, {
      key: 'success',
      value: function success(message) {
        this.log(message, { addnCls: 'success' });
      }
    }, {
      key: 'error',
      value: function error(message) {
        this.log(message, { addnCls: 'error' });
      }
    }]);

    var _Notification = Notification;
    Notification = (0, _aureliaFramework.inject)(_humane2['default'], new _aureliaDependencyInjection.Optional(_aureliaI18n.I18N))(Notification) || Notification;
    return Notification;
  })();

  exports.Notification = Notification;
});