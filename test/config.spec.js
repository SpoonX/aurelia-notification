import {Config} from '../src/aurelia-notification';
import extend from 'extend';

describe('Config', function() {
  describe('.configure()', function() {
    it('Should configure with defaults', function() {
      let config   = new Config;
      let returned = config.configure();

      expect(config.translate).toEqual(true);
      expect(config.defaults).toEqual({});
      expect(config.notifications).toEqual(defaults.notifications);
      expect(returned).toBe(config);
    });
  });

  it('Should configure with options', function() {
    let config   = new Config;
    let options = {
      translate: false,
      defaults: {
        'success': 'options overwrite',
        'added': {addnCls: 'options new one'}
      },
      notifications: {
        'success': {addnCls: 'overwrite'},
        'added': 'new one'
      }};
    let returned = config.configure(options);

    expect(config.translate).toEqual(options.translate);
    expect(config.defaults).toEqual(options.defaults);
    expect(config.notifications).toEqual(extend({}, defaults.notifications, options.notifications));
    expect(returned).toBe(config);
  });

  it('Should configure with inherited and own options ', function() {
    let config   = new Config;
    let options = {
      translate: true,
      defaults: {
        'success': 'options overwrite',
        'added': 'options new one'
      },
      notifications: {
        'success': 'overwrite',
        'added': 'new one'
      }};
    let base = {
      translate: false,
      defaults: {
        'success': 'base options overwrite',
        'added': 'base options new one'
      },
      notifications: {
        'success': 'base overwrite',
        'added': 'base new one'
      }};
    let returned = config.configure(options, base);
    let expected = extend({}, base, options);

    expect(config.translate).toEqual(expected.translate);
    expect(config.defaults).toEqual(expected.defaults);
    expect(config.notifications).toEqual(expected.notifications);
    expect(returned).toBe(config);
  });
});

let defaults = {
  notifications: {
    note: {},
    success: {addnCls: 'success'},
    error: {addnCls: 'error'},
    info: {addnCls: 'info'}
  }};
