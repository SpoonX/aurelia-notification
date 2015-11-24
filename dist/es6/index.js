import humane from 'wavded/humane-js';
import {inject} from 'aurelia-framework';
import {I18N} from 'aurelia-i18n';

@inject(humane, I18N)
export class Notification {
  constructor (humane, i18n) {
    this.humane = humane;
    this.i18n   = i18n;
  }

  success (message) {
    this.humane.log(this.i18n.tr(message), {addnCls: 'success'});
  }

  error (message) {
    this.humane.log(this.i18n.tr(message), {addnCls: 'error'});
  }
}
