define(['exports', './config', 'wavded/humane-js', 'aurelia-dependency-injection', 'aurelia-i18n', 'javascript-decorators'], function (exports, _config, _humaneJs, _aureliaDependencyInjection, _aureliaI18n, _javascriptDecorators) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Notification = undefined;

  var _humaneJs2 = _interopRequireDefault(_humaneJs);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _desc, _value, _class2;

  var Notification = exports.Notification = (_dec = (0, _aureliaDependencyInjection.inject)(_config.Config, _humaneJs2.default, _aureliaI18n.I18N), _dec2 = (0, _javascriptDecorators.readonly)(), _dec3 = (0, _javascriptDecorators.readonly)(), _dec4 = (0, _javascriptDecorators.readonly)(), _dec5 = (0, _javascriptDecorators.readonly)(), _dec6 = (0, _javascriptDecorators.readonly)(), _dec7 = (0, _javascriptDecorators.readonly)(), _dec8 = (0, _javascriptDecorators.readonly)(), _dec9 = (0, _javascriptDecorators.readonly)(), _dec(_class = (_class2 = function () {
    function Notification(config, humane, i18n) {
      var _this = this;

      _classCallCheck(this, Notification);

      this.define('__config', config).define('__humane', humane).define('__i18n', i18n);

      this.setBaseCls();

      for (var key in config.notifications) {
        this[key] = this.spawn(config.notifications[key]);
      }

      this.setContainer();
      var aureliaComposedListener = function aureliaComposedListener() {
        _this.setContainer();
        document.removeEventListener('aurelia-composed', aureliaComposedListener);
      };
      document.addEventListener('aurelia-composed', aureliaComposedListener);
    }

    Notification.prototype.define = function define(property, value, writable) {
      Object.defineProperty(this, property, {
        value: value,
        writable: !!writable,
        enumerable: false
      });

      return this;
    };

    Notification.prototype.configure = function configure(incomming) {
      this.__config.configure(incomming, this.__config);

      this.setBaseCls(incomming.defaults.baseCls);
      this.setContainer(this.__config.container);

      for (var key in this.__config.notifications) {
        this[key] = this.spawn(this.__config.notifications[key]);
      }

      return this.__config;
    };

    Notification.prototype.setContainer = function setContainer() {
      var container = arguments.length <= 0 || arguments[0] === undefined ? document.body : arguments[0];

      this.__humane.container = container;
      this.__humane.container.appendChild(this.__humane.el);
      return this.__humane.container;
    };

    Notification.prototype.setBaseCls = function setBaseCls() {
      var baseCls = arguments.length <= 0 || arguments[0] === undefined ? this.__config.defaults.baseCls : arguments[0];

      this.__humane.baseCls = baseCls ? baseCls : this.__humane.baseCls;
      return this.__humane.baseCls;
    };

    Notification.prototype.translate = function translate(options, defaults) {
      var joined = Object.assign({}, this.__config, defaults, options);
      return this.__i18n.i18next.isInitialized() && joined.translate;
    };

    Notification.prototype.log = function log(message, options) {
      var _this2 = this;

      var defaults = arguments.length <= 2 || arguments[2] === undefined ? this.__config.defaults : arguments[2];

      if (this.translate()) {
        if (message instanceof Array) {
          message = message.map(function (item) {
            return _this2.i18n.tr(item);
          });
        } else {
          message = this.__i18n.tr(message);
        }
      }

      return new Promise(function (resolve, reject) {
        _this2.__humane.log(message, options, resolve, defaults);
      });
    };

    Notification.prototype.spawn = function spawn(addnDefaults) {
      var _this3 = this;

      addnDefaults = typeof addnDefaults === 'string' ? { 'addnCls': addnDefaults } : addnDefaults;
      var defaults = Object.assign({}, this.__config.defaults, addnDefaults);

      return function (message, options) {
        return _this3.log(message, options, defaults);
      };
    };

    Notification.prototype.remove = function remove() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        _this4.__humane.remove(resolve);
      });
    };

    return Notification;
  }(), (_applyDecoratedDescriptor(_class2.prototype, 'define', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'define'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'configure', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'configure'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'setContainer', [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'setContainer'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'setBaseCls', [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'setBaseCls'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'translate', [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'translate'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'log', [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, 'log'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'spawn', [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, 'spawn'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'remove', [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, 'remove'), _class2.prototype)), _class2)) || _class);
});