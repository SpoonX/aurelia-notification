import {Config} from './config';
import Humane from 'wavded/humane-js';
import {inject} from 'aurelia-framework';
import {I18N} from 'aurelia-i18n';
import {Optional} from 'aurelia-dependency-injection';

@inject(Config, Humane, new Optional(I18N))
export class Notification {

  /**
   * Construct.
   *
   * @param {Humane} humane
   * @param {i18N} [I18N]
   *
   * @constructor
   */
  constructor(config, humane, i18n) {
    this.config = config;
    this._humane = humane.create();
    this.i18n = i18n;

    this._humane.baseCls = this.config.current.baseCls;
    this.translate = this.config.current.translate;
  }

  /**
   * Humane instance. See http://wavded.github.io/humane-js/
   *
   * @return {humane}
   */
  get humane() {
    return this._humane;
  }

  /**
   * Notify (translated if applicable) using Humane.log.
   *
   * @param {String|String[]}  message|multi-line message.
   * @param {{}|function} [options|callback] passed on to humane.
   *
   */
  log(message, options) {
    if (this.translate && this.i18n && this.i18n.i18next.isInitialized()) {
      if (message instanceof Array) {
        message = message.map(item=>this.i18n.tr(item));
      } else {
        message = this.i18n.tr(message);
      }
    }

    options.addnCls = (typeof(options.addnCls) === 'string') ? `${this._humane.baseCls}-${options.addnCls}` : undefined;

    this._humane.log(message, options);
  }

  /**
   * Notify success (translated if applicable).
   * {addnCls: 'success'} is automatically passed on to humane.
   *
   * @param {String|String[]}  message|multi-line message.
   * @param {{}} [options] passed on to humane.
   *
   */
  success(message, options = {}) {
    this.log(message, Object.assign({addnCls: 'success'}, options));
  }

  /**
   * Notify error (translated if applicable).
   * {addnCls: 'error'} is automatically passed on to humane.
   *
   * @param {String|String[]}  message|multi-line message.
   * @param {{}} [options] passed on to humane.
   *
   */
  error(message, options = {}) {
    this.log(message, Object.assign({addnCls: 'error'}, options));
  }
}
