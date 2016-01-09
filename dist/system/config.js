System.register([], function (_export) {
  'use strict';

  var Config;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      Config = (function () {
        _createClass(Config, [{
          key: 'configure',
          value: function configure(incomingConfig) {
            Object.assign(this.current, incomingConfig);
          }
        }]);

        function Config() {
          _classCallCheck(this, Config);

          this.current = {
            translate: true,
            baseCls: 'humane'
          };
        }

        return Config;
      })();

      _export('Config', Config);
    }
  };
});