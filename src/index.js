import humane from 'wavded/humane-js';
import {inject} from 'aurelia-framework';
import {I18N} from 'aurelia-i18n';
import {Optional} from 'aurelia-dependency-injection';

@inject(humane, new Optional(I18N))
export class Notification {
  
  /**
   * Construct.
   *
   * @param {humane} humane
   * @param {i18N} [I18N]
   *
   * @constructor
   */
  constructor(_humane, i18n) {
    this._humane = _humane;
    this.i18n   = i18n;
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
    if (this.i18n && this.i18n.i18next.isInitialized()) {
      if (message instanceof Array) {
        message = message.map(item=>this.i18n.tr(item));
      } else {
        message = this.i18n.tr(message);
      }
    }

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
    this.log(message, Object.assign(options, {addnCls: 'success'});
  }

  /**
   * Notify error (translated if applicable).
   * {addnCls: 'error'} is automatically passed on to humane.
   *
   * @param {String|String[]}  message|multi-line message.
   * @param {{}} [options] passed on to humane.
   *
   */
  error(message, options= {}) {
    this.log(message, Object.assign(options, {addnCls: 'error'});
  }
}
