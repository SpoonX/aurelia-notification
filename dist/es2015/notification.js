var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _desc, _value, _class2;

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

import { Config } from './config';
import Humane from 'wavded/humane-js';
import { inject } from 'aurelia-dependency-injection';
import { I18N } from 'aurelia-i18n';
import { readonly } from 'javascript-decorators';

export let Notification = (_dec = inject(Config, Humane, I18N), _dec2 = readonly(), _dec3 = readonly(), _dec4 = readonly(), _dec5 = readonly(), _dec6 = readonly(), _dec7 = readonly(), _dec8 = readonly(), _dec9 = readonly(), _dec(_class = (_class2 = class Notification {
  constructor(config, humane, i18n) {
    this.define('__config', config).define('__humane', humane).define('__i18n', i18n);

    this.setBaseCls();

    for (let key in config.notifications) {
      this[key] = this.spawn(config.notifications[key]);
    }

    this.setContainer();
    let aureliaComposedListener = () => {
      this.setContainer();
      document.removeEventListener('aurelia-composed', aureliaComposedListener);
    };
    document.addEventListener('aurelia-composed', aureliaComposedListener);
  }

  define(property, value, writable) {
    Object.defineProperty(this, property, {
      value: value,
      writable: !!writable,
      enumerable: false
    });

    return this;
  }

  configure(incomming) {
    this.__config.configure(incomming, this.__config);

    this.setBaseCls(incomming.defaults.baseCls);
    this.setContainer(this.__config.container);

    for (let key in this.__config.notifications) {
      this[key] = this.spawn(this.__config.notifications[key]);
    }

    return this.__config;
  }

  setContainer(container = document.body) {
    this.__humane.container = container;
    this.__humane.container.appendChild(this.__humane.el);
    return this.__humane.container;
  }

  setBaseCls(baseCls = this.__config.defaults.baseCls) {
    this.__humane.baseCls = baseCls ? baseCls : this.__humane.baseCls;
    return this.__humane.baseCls;
  }

  translate(options, defaults) {
    let joined = Object.assign({}, this.__config, defaults, options);
    return this.__i18n.i18next.isInitialized() && joined.translate;
  }

  log(message, options, defaults = this.__config.defaults) {
    if (this.translate()) {
      if (message instanceof Array) {
        message = message.map(item => this.i18n.tr(item));
      } else {
        message = this.__i18n.tr(message);
      }
    }

    return new Promise((resolve, reject) => {
      this.__humane.log(message, options, resolve, defaults);
    });
  }

  spawn(addnDefaults) {
    addnDefaults = typeof addnDefaults === 'string' ? { 'addnCls': addnDefaults } : addnDefaults;
    let defaults = Object.assign({}, this.__config.defaults, addnDefaults);

    return (message, options) => {
      return this.log(message, options, defaults);
    };
  }

  remove() {
    return new Promise((resolve, reject) => {
      this.__humane.remove(resolve);
    });
  }
}, (_applyDecoratedDescriptor(_class2.prototype, 'define', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'define'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'configure', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'configure'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'setContainer', [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'setContainer'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'setBaseCls', [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'setBaseCls'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'translate', [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'translate'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'log', [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, 'log'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'spawn', [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, 'spawn'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'remove', [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, 'remove'), _class2.prototype)), _class2)) || _class);