import {Config} from '../src/config';
import {Notification} from '../src/notification';
import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {Container} from 'aurelia-dependency-injection';
import {DOM} from 'aurelia-pal';
import {I18N} from 'aurelia-i18n';
import XHR from 'i18next-xhr-backend';
import Humane from 'humane-js';

describe('Notification', () => {
  let component;


  beforeEach( ()=> {
    component = StageComponent
      .withResources('test/resources/dummy')
      .inView('')
      .boundTo({});

    component.configure = function(aurelia) {
      aurelia.use
        .standardConfiguration()
        .plugin('aurelia-i18n', instance => {
          instance.i18next.use(XHR);
          return instance.setup({
            backend: {
              loadPath: 'base/test/resources/{{lng}}/{{ns}}.json'
            },
            lng: 'de',
            attributes: ['t', 'i18n'],
            debug: false,
            ns: ['test'],
            defaultNS: 'test'
          });
        });
    };
  });

  afterEach(() => {
    component.dispose();
  });

  describe('.constructor()', function() {
    it('Should create with defaults', function(done) {
      let container = new Container();
      let config = container.get(Config).configure();
      let notification = container.get(Notification);

      component.create(bootstrap).then( function() {
        let i18n = container.get(I18N);
        let humane = container.get(Humane);

        expect(notification.__i18n).toBe(i18n);
        expect(notification.__config).toBe(config);
        expect(notification.__humane).toBe(humane);
        expect(notification.__humane.container).toBe(DOM.querySelectorAll('body')[0]);
        expect(notification.__humane.baseCls).toBe('humane');
        expect(notification.__humane.el.outerHTML).toBe('<div style="display: none;"></div>');

        for (let key in config.notifications) {
          expect(notification[key]).toBeDefined();
          expect(typeof notification[key]).toBe('function');
        }

        done();
      });
    });
  });

  describe('.note()', function() {
    it('Should show translated notification with options', function(done) {
      let container = new Container();
      let config = container.get(Config).configure();
      let notification = container.get(Notification);

      component.create(bootstrap).then(function() {
        notification.note('original', {addnCls: 'test', timeout: 10});

        setTimeout(()=>{
          expect(notification.__humane.el.className).toMatch(/test/);
          expect(notification.__humane.el.innerHTML).toBe('translated');
          expect(notification.__humane.currentMsg.timeout).toBe(10);
          done();
        }, 50);
      });
    });
  });
});
