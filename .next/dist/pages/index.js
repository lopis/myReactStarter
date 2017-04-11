'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reactI18next = require('react-i18next');

var _App = require('../app/containers/App');

var _App2 = _interopRequireDefault(_App);

var _reducer = require('../app/reducers/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _store = require('../app/reducers/store');

var _store2 = _interopRequireDefault(_store);

var _i18n = require('../app/i18n/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageHome = function (_Component) {
  (0, _inherits3.default)(PageHome, _Component);

  (0, _createClass3.default)(PageHome, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var req = _ref2.req;
        var isServer, store, translations, i18n;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isServer = !!req;
                store = (0, _store2.default)(_reducer2.default, null, isServer);
                translations = {};
                i18n = (0, _i18n2.default)(translations, isServer);

                store.dispatch({ type: 'INITIAL', hello: 'https://media.giphy.com/media/pK4av7uBK3I4M/giphy.gif' });

                return _context.abrupt('return', { initialState: store.getState(), isServer: isServer, translations: translations });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function PageHome(props) {
    (0, _classCallCheck3.default)(this, PageHome);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PageHome.__proto__ || (0, _getPrototypeOf2.default)(PageHome)).call(this, props));

    _this.i18n = (0, _i18n2.default)(props.translations);
    _this.store = (0, _store2.default)(_reducer2.default, props.initialState, props.isServer);
    return _this;
  }

  (0, _createClass3.default)(PageHome, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactI18next.I18nextProvider, { i18n: this.i18n }, _react2.default.createElement(_reactRedux.Provider, { store: this.store }, _react2.default.createElement(_App2.default, null, 'Hello World. This is the index page.')));
    }
  }]);

  return PageHome;
}(_react.Component);

exports.default = PageHome;