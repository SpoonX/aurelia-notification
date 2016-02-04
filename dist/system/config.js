System.register([], function (_export) {
  'use strict';

  var Config;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      Config = (function () {
        function Config() {
          _classCallCheck(this, Config);

          this.translate = true;
          this.defaults = {};
          this.notifications = {
            note: {},
            success: { addnCls: 'success' },
            error: { addnCls: 'error' },
            info: { addnCls: 'info' }
          };
        }

        _createClass(Config, [{
          key: 'configure',
          value: function configure() {
            var incomming = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
            var base = arguments.length <= 1 || arguments[1] === undefined ? this : arguments[1];

            this.translate = 'translate' in incomming ? incomming.translate : base.translate;

            this.defaults = Object.assign({}, base.defaults, incomming.defaults);

            if (typeof incomming.notifications === 'object') {
              for (var key in incomming.notifications) {
                incomming.notifications[key] = typeof incomming.notifications[key] === 'object' ? incomming.notifications[key] : { addnCls: incomming.notifications[key] };
                this.notifications[key] = Object.assign({}, base.notifications[key], incomming.notifications[key]);
              }
            }

            return this;
          }
        }]);

        return Config;
      })();

      _export('Config', Config);
    }
  };
});