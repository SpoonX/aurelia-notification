define(['exports', './config', 'wavded/humane-js', 'aurelia-framework', 'aurelia-i18n'], function (exports, _config, _wavdedHumaneJs, _aureliaFramework, _aureliaI18n) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _Humane = _interopRequireDefault(_wavdedHumaneJs);

  var Notification = (function () {
    function Notification(config, humane, i18n) {
      _classCallCheck(this, _Notification);

      this.config = config;
      this._humane = humane.create();
      this.i18n = i18n;

      this._humane.baseCls = this.config.current.baseCls;
      this.translate = this.config.current.translate;
    }

    _createClass(Notification, [{
      key: 'log',
      value: function log(message, options) {
        var _this = this;

        if (this.translate && this.i18n.i18next.isInitialized()) {
          if (message instanceof Array) {
            message = message.map(function (item) {
              return _this.i18n.tr(item);
            });
          } else {
            message = this.i18n.tr(message);
          }
        }

        options.addnCls = typeof options.addnCls === 'string' ? this._humane.baseCls + '-' + options.addnCls : undefined;

        this._humane.log(message, options);
      }
    }, {
      key: 'success',
      value: function success(message) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        this.log(message, Object.assign({ addnCls: 'success' }, options));
      }
    }, {
      key: 'error',
      value: function error(message) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        this.log(message, Object.assign({ addnCls: 'error' }, options));
      }
    }, {
      key: 'humane',
      get: function get() {
        return this._humane;
      }
    }]);

    var _Notification = Notification;
    Notification = (0, _aureliaFramework.inject)(_config.Config, _Humane['default'], _aureliaI18n.I18N)(Notification) || Notification;
    return Notification;
  })();

  exports.Notification = Notification;
});