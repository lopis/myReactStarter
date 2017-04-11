'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _i18next = require('i18next');

var _i18next2 = _interopRequireDefault(_i18next);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const startI18n = file => {
  return _i18next2.default.init({
    fallbackLng: 'en',
    resources: file,

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: false,
    backend: {
      loadPath: '/app/i18n/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      test: '{{ng}}'
    },

    interpolation: {
      formatSeparator: ',',
      format: function (value, format, lng) {
        if (format === 'uppercase') return value.toUpperCase();
        return value;
      }
    }
  });
};

exports.default = startI18n;