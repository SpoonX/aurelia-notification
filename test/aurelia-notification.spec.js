import {configure} from '../src/aurelia-notification';
import {Config} from '../src/config';
import {Notification} from '../src/notification';
import {Container} from 'aurelia-dependency-injection';

describe('aurelia-notification', function() {
  describe('export', function() {
    it('Should export configure', function() {
      expect(configure).toBeDefined();
    });

    it('Should export Config', function() {
      expect(Config).toBeDefined();
    });

    it('Should export Notification', function() {
      expect(Notification).toBeDefined();
    });
  });

  describe('configure()', function() {
    it('Should call callback with a Config instance', function(done) {
      configure(aurelia(new Container()), function(config) {
        expect(config instanceof Config).toBe(true);

        done();
      });
    });
  });
});

function aurelia(container) {
  return {
    container: container || {
      get: function returnVal(val) {
        return val;
      }
    }
  };
}
