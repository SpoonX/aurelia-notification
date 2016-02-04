System.register(['./config', 'wavded/humane-js', 'aurelia-dependency-injection', 'aurelia-i18n', 'javascript-decorators'], function (_export) {
  'use strict';

  var Config, Humane, inject, I18N, readonly, Notification;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_config) {
      Config = _config.Config;
    }, function (_wavdedHumaneJs) {
      Humane = _wavdedHumaneJs['default'];
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaI18n) {
      I18N = _aureliaI18n.I18N;
    }, function (_javascriptDecorators) {
      readonly = _javascriptDecorators.readonly;
    }],
    execute: function () {
      Notification = (function () {
        function Notification(config, humane, i18n) {
          _classCallCheck(this, _Notification);

          this.define('__config', config).define('__humane', humane).define('__i18n', i18n);

          this.setBaseCls();
          this.setContainer();

          for (var key in config.notifications) {
            this[key] = this.spawn(config.notifications[key]);
          }
        }

        _createDecoratedClass(Notification, [{
          key: 'define',
          decorators: [readonly()],
          value: function define(property, value, writable) {
            Object.defineProperty(this, property, {
              value: value,
              writable: !!writable,
              enumerable: false
            });

            return this;
          }
        }, {
          key: 'configure',
          decorators: [readonly()],
          value: function configure(incomming) {
            this.__config.configure(incomming, this.__config);

            this.setBaseCls(incomming.defaults.baseCls);
            this.setContainer(this.__config.container);

            for (var key in this.__config.notifications) {
              this[key] = this.spawn(this.__config.notifications[key]);
            }

            return this.__config;
          }
        }, {
          key: 'setContainer',
          decorators: [readonly()],
          value: function setContainer() {
            var container = arguments.length <= 0 || arguments[0] === undefined ? document.body : arguments[0];

            this.__humane.container = container;
            this.__humane.container.appendChild(this.__humane.el);
            return this.__humane.container;
          }
        }, {
          key: 'setBaseCls',
          decorators: [readonly()],
          value: function setBaseCls() {
            var baseCls = arguments.length <= 0 || arguments[0] === undefined ? this.__config.defaults.baseCls : arguments[0];

            this.__humane.baseCls = baseCls ? baseCls : this.__humane.baseCls;
            return this.__humane.baseCls;
          }
        }, {
          key: 'translate',
          decorators: [readonly()],
          value: function translate(options, defaults) {
            var joined = Object.assign({}, this.__config, defaults, options);
            return this.__i18n.i18next.isInitialized() && joined.translate;
          }
        }, {
          key: 'log',
          decorators: [readonly()],
          value: function log(message, options) {
            var _this = this;

            var defaults = arguments.length <= 2 || arguments[2] === undefined ? this.__config.defaults : arguments[2];

            if (this.translate()) {
              if (message instanceof Array) {
                message = message.map(function (item) {
                  return _this.i18n.tr(item);
                });
              } else {
                message = this.__i18n.tr(message);
              }
            }

            return new Promise(function (resolve, reject) {
              _this.__humane.log(message, options, resolve, defaults);
            });
          }
        }, {
          key: 'spawn',
          decorators: [readonly()],
          value: function spawn(addnDefaults) {
            var _this2 = this;

            addnDefaults = typeof addnDefaults === 'string' ? { 'addnCls': addnDefaults } : addnDefaults;
            var defaults = Object.assign({}, this.__config.defaults, addnDefaults);

            return function (message, options) {
              return _this2.log(message, options, defaults);
            };
          }
        }, {
          key: 'remove',
          decorators: [readonly()],
          value: function remove() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              _this3.__humane.remove(resolve);
            });
          }
        }]);

        var _Notification = Notification;
        Notification = inject(Config, Humane, I18N)(Notification) || Notification;
        return Notification;
      })();

      _export('Notification', Notification);
    }
  };
});