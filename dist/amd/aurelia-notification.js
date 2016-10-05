define(['exports', 'extend', 'humane-js', 'aurelia-dependency-injection', 'aurelia-i18n', 'aurelia-pal'], function (exports, _extend, _humaneJs, _aureliaDependencyInjection, _aureliaI18n, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Notification = exports.Config = undefined;
  exports.configure = configure;

  var _extend2 = _interopRequireDefault(_extend);

  var _humaneJs2 = _interopRequireDefault(_humaneJs);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class2, _desc, _value, _class3;

  

  var Config = exports.Config = function () {
    function Config() {
      

      this.translate = true;
      this.defaults = {};
      this.notifications = {
        note: {},
        success: { addnCls: 'success' },
        error: { addnCls: 'error' },
        info: { addnCls: 'info' }
      };
    }

    Config.prototype.configure = function configure() {
      var incoming = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

      this.translate = 'translate' in incoming ? incoming.translate : base.translate;
      this.defaults = (0, _extend2.default)({}, base.defaults, incoming.defaults);
      this.notifications = (0, _extend2.default)({}, base.notifications, incoming.notifications);

      return this;
    };

    return Config;
  }();

  function configure(frameworkConfig, configOrConfigure) {
    var config = frameworkConfig.container.get(Config);

    if (typeof configOrConfigure === 'function') {
      configOrConfigure(config);

      return;
    }

    config.configure(configOrConfigure);
  }

  function readonly() {
    return function (key, target, descriptor) {
      descriptor.writable = false;

      return descriptor;
    };
  }

  var Notification = exports.Notification = (_dec = (0, _aureliaDependencyInjection.inject)(Config, _humaneJs2.default, _aureliaI18n.I18N), _dec2 = readonly(), _dec3 = readonly(), _dec4 = readonly(), _dec5 = readonly(), _dec6 = readonly(), _dec7 = readonly(), _dec8 = readonly(), _dec(_class2 = (_class3 = function () {
    Notification.prototype.note = function note(message) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var defaults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.__config.defaults;
    };

    Notification.prototype.success = function success(message) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var defaults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.__config.defaults;
    };

    Notification.prototype.error = function error(message) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var defaults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.__config.defaults;
    };

    Notification.prototype.info = function info(message) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var defaults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.__config.defaults;
    };

    function Notification(config, humane, i18n) {
      var _this = this;

      

      this.define('__config', config).define('__humane', humane).define('__i18n', i18n);

      this.setBaseCls();

      for (var key in config.notifications) {
        if (config.notifications.hasOwnProperty(key)) {
          this[key] = this.spawn(config.notifications[key]);
        }
      }

      this.setContainer();
      var aureliaComposedListener = function aureliaComposedListener() {
        _this.setContainer();
        _aureliaPal.DOM.removeEventListener('aurelia-composed', aureliaComposedListener);
      };

      _aureliaPal.DOM.addEventListener('aurelia-composed', aureliaComposedListener);
    }

    Notification.prototype.define = function define(property, value, writable) {
      Object.defineProperty(this, property, {
        value: value,
        writable: !!writable,
        enumerable: false
      });

      return this;
    };

    Notification.prototype.setContainer = function setContainer(container) {
      _aureliaPal.DOM.appendNode(this.__humane.el, container);
      this.__humane.container = this.__humane.el.parentNode;
    };

    Notification.prototype.setBaseCls = function setBaseCls() {
      var baseCls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.__config.defaults.baseCls;

      this.__humane.baseCls = baseCls ? baseCls : this.__humane.baseCls;
    };

    Notification.prototype.translate = function translate() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var joined = (0, _extend2.default)({}, this.__config, defaults, options);

      return joined.translate;
    };

    Notification.prototype.log = function log(message) {
      var _this2 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var defaults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.__config.defaults;

      if (this.translate(options, defaults)) {
        if (message instanceof Array) {
          message = message.map(function (item) {
            return _this2.i18n.tr(item);
          });
        } else {
          message = this.__i18n.tr(message);
        }
      }

      return new Promise(function (resolve) {
        return _this2.__humane.log(message, options, resolve, defaults);
      });
    };

    Notification.prototype.spawn = function spawn(addnDefaults) {
      var _this3 = this;

      addnDefaults = typeof addnDefaults === 'string' ? { 'addnCls': addnDefaults } : addnDefaults;
      var defaults = (0, _extend2.default)({}, this.__config.defaults, addnDefaults);

      return function (message, options) {
        return _this3.log(message, options, defaults);
      };
    };

    Notification.prototype.remove = function remove() {
      var _this4 = this;

      return new Promise(function (resolve) {
        return _this4.__humane.remove(resolve);
      });
    };

    return Notification;
  }(), (_applyDecoratedDescriptor(_class3.prototype, 'define', [_dec2], Object.getOwnPropertyDescriptor(_class3.prototype, 'define'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'setContainer', [_dec3], Object.getOwnPropertyDescriptor(_class3.prototype, 'setContainer'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'setBaseCls', [_dec4], Object.getOwnPropertyDescriptor(_class3.prototype, 'setBaseCls'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'translate', [_dec5], Object.getOwnPropertyDescriptor(_class3.prototype, 'translate'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'log', [_dec6], Object.getOwnPropertyDescriptor(_class3.prototype, 'log'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'spawn', [_dec7], Object.getOwnPropertyDescriptor(_class3.prototype, 'spawn'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'remove', [_dec8], Object.getOwnPropertyDescriptor(_class3.prototype, 'remove'), _class3.prototype)), _class3)) || _class2);
});