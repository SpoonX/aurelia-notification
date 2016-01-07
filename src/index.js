import humane from 'wavded/humane-js';
import {inject} from 'aurelia-framework';
import {I18N} from 'aurelia-i18n';
import {Optional} from 'aurelia-dependency-injection';

@inject(humane, new Optional(I18N))
export class Notification {
  constructor (humane, i18n) {
    this.humane = humane;
    this.i18n   = i18n;
  }

  _log(message, options) {
    if (this.i18n && this.i18n.i18next.isInitialized())
      message = this.i18n.tr(message);

    this.humane.log(message, options); 
  }

  success (message) {
    this._log(message, {addnCls: 'success'});
  }

  error (message) {
    this._log(message, {addnCls: 'error'});
  }
}
