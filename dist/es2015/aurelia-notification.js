var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class2, _desc, _value, _class3;

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

import extend from 'extend';
import Humane from 'humane-js';
import { inject } from 'aurelia-dependency-injection';
import { I18N } from 'aurelia-i18n';
import { DOM } from 'aurelia-pal';

export let Config = class Config {
  constructor() {
    this.translate = true;
    this.defaults = {};
    this.notifications = {
      note: {},
      success: { addnCls: 'success' },
      error: { addnCls: 'error' },
      info: { addnCls: 'info' }
    };
  }

  configure(incoming = {}, base = this) {
    this.translate = 'translate' in incoming ? incoming.translate : base.translate;
    this.defaults = extend({}, base.defaults, incoming.defaults);
    this.notifications = extend({}, base.notifications, incoming.notifications);

    return this;
  }
};

export function configure(frameworkConfig, configOrConfigure) {
  let config = frameworkConfig.container.get(Config);

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

export let Notification = (_dec = inject(Config, Humane, I18N), _dec2 = readonly(), _dec3 = readonly(), _dec4 = readonly(), _dec5 = readonly(), _dec6 = readonly(), _dec7 = readonly(), _dec8 = readonly(), _dec(_class2 = (_class3 = class Notification {
  note(message, options = {}, defaults = this.__config.defaults) {}
  success(message, options = {}, defaults = this.__config.defaults) {}
  error(message, options = {}, defaults = this.__config.defaults) {}
  info(message, options = {}, defaults = this.__config.defaults) {}
  constructor(config, humane, i18n) {
    this.define('__config', config).define('__humane', humane).define('__i18n', i18n);

    this.setBaseCls();

    for (let key in config.notifications) {
      if (config.notifications.hasOwnProperty(key)) {
        this[key] = this.spawn(config.notifications[key]);
      }
    }

    if (!humane.container) {
      this.setContainer();
      let aureliaComposedListener = () => {
        if (!humane.container) {
          this.setContainer();
        }
        DOM.removeEventListener('aurelia-composed', aureliaComposedListener);
      };

      DOM.addEventListener('aurelia-composed', aureliaComposedListener);
    }
  }

  define(property, value, writable) {
    Object.defineProperty(this, property, {
      value: value,
      writable: !!writable,
      enumerable: false
    });

    return this;
  }

  setContainer(container) {
    DOM.appendNode(this.__humane.el, container);
    this.__humane.container = this.__humane.el.parentNode;
  }

  setBaseCls(baseCls = this.__config.defaults.baseCls) {
    this.__humane.baseCls = baseCls ? baseCls : this.__humane.baseCls;
  }

  translate(options = {}, defaults = {}) {
    let joined = extend({}, this.__config, defaults, options);

    return joined.translate;
  }

  log(message, options = {}, defaults = this.__config.defaults) {
    if (this.translate(options, defaults)) {
      if (message instanceof Array) {
        message = message.map(item => this.i18n.tr(item));
      } else {
        message = this.__i18n.tr(message);
      }
    }

    return new Promise(resolve => {
      return this.__humane.log(message, options, resolve, defaults);
    });
  }

  spawn(addnDefaults) {
    addnDefaults = typeof addnDefaults === 'string' ? { 'addnCls': addnDefaults } : addnDefaults;
    let defaults = extend({}, this.__config.defaults, addnDefaults);

    return (message, options) => {
      return this.log(message, options, defaults);
    };
  }

  remove() {
    return new Promise(resolve => {
      return this.__humane.remove(resolve);
    });
  }
}, (_applyDecoratedDescriptor(_class3.prototype, 'define', [_dec2], Object.getOwnPropertyDescriptor(_class3.prototype, 'define'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'setContainer', [_dec3], Object.getOwnPropertyDescriptor(_class3.prototype, 'setContainer'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'setBaseCls', [_dec4], Object.getOwnPropertyDescriptor(_class3.prototype, 'setBaseCls'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'translate', [_dec5], Object.getOwnPropertyDescriptor(_class3.prototype, 'translate'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'log', [_dec6], Object.getOwnPropertyDescriptor(_class3.prototype, 'log'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'spawn', [_dec7], Object.getOwnPropertyDescriptor(_class3.prototype, 'spawn'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'remove', [_dec8], Object.getOwnPropertyDescriptor(_class3.prototype, 'remove'), _class3.prototype)), _class3)) || _class2);