import {Config, Notification} from '../src/aurelia-notification';
import {StageComponent} from './component-tester';
import {Container} from 'aurelia-dependency-injection';
import {DOM} from 'aurelia-pal';
import {I18N} from 'aurelia-i18n';
import XHR from 'i18next-xhr-backend';
import Humane from 'humane-js';

describe('Notification', () => {
  let component;

  // create, bootstrap and attach custom element
  beforeAll( done => {
    // set binding context
    component = StageComponent
      .withResources('test/resources/dummy')
      .inView('')
      .boundTo({});

    // bootstrap component
    component.bootstrap(aurelia => {
      aurelia.use
        .standardConfiguration()
        .plugin('aurelia-i18n', instance => {
          instance.i18next.use(XHR);
          instance.setup({
            backend: {
              loadPath: 'base/test/resources/{{lng}}/{{ns}}.json'
            },
            lng: 'de',
            attributes: ['t', 'i18n'],
            debug: false,
            ns: ['test'],
            defaultNS: 'test'
          })
          .then(done);
        });
    });

    // start
    component.create();
  });

  // remove custom element
  afterAll( () => {
    let node = component.element;
    DOM.removeNode(node, node.parentNode);
  });

  let container = new Container();
  let config = container.get(Config).configure();
  let notification = container.get(Notification);

  describe('.constructor()', function() {
    it('Should create with defaults', function() {
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
    });
  });

  describe('.note()', function() {
    it('Should show translated notification with options', function(done) {
      notification.note('original', {addnCls: 'test', timeout: 100});

      setTimeout(()=>{
        expect(notification.__humane.el.className).toMatch(/test/);
        expect(notification.__humane.el.innerHTML).toBe('translated');
        expect(notification.__humane.currentMsg.timeout).toBe(100);
        done();
      }, 200);
    });
  });
});
