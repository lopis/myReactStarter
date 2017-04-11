webpackHotUpdate(5,{

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(22);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(23);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(439);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(572);

var _glamorous = __webpack_require__(592);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _head = __webpack_require__(198);

var _head2 = _interopRequireDefault(_head);

var _link = __webpack_require__(612);

var _link2 = _interopRequireDefault(_link);

var _routes = __webpack_require__(618);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Div = _glamorous2.default.div({
  color: '#333',
  fontSize: 32
});

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      console.log();
      return _react2.default.createElement(Div, { className: 'App' }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'My React Starter'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })), _react2.default.createElement('div', null, this.props.children), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: (0, _routes2.default)('index') }, _react2.default.createElement('a', null, 'index page'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: (0, _routes2.default)('info'), prefetch: true }, _react2.default.createElement('a', null, 'extra page'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: (0, _routes2.default)('extra'), prefetch: true }, _react2.default.createElement('a', null, 'missing page')))));
    }
  }]);

  return App;
}(_react.Component);

App.propTypes = {
  dispatch: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/joao/code/myReactStarter/app/containers/App.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/joao/code/myReactStarter/app/containers/App.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9BcHAuanM/YzQwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQjs7OztBQUNUOzs7O0FBQ0U7O0FBQ0Y7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVQLElBQU0sMEJBQWdCO1NBRXBCO1lBQVU7QUFEVixDQURVOztJQUtOOzs7Ozs7Ozs7Ozs2QkFFRjtjQUNBO2FBQ0UsZ0JBQUMsY0FBRCxPQUFLLFdBQ0gseUJBQUMsOEJBQ0MsbURBQ0EsNkRBQU0sTUFBSyxZQUFXLFNBRXhCLGtGQUNHLFdBQUssTUFFUiwrQ0FDRSwwQ0FDRSxzQkFBQyxnQ0FBSyxNQUFNLHNCQUNWLHFEQUdKLHFEQUNFLHNCQUFDLGdDQUFLLE1BQU0sc0JBQU8sU0FBUyxVQUMxQixpREFHSixxREFDRSxzQkFBQyxnQ0FBSyxNQUFNLHNCQUFPLFVBQVUsVUFDM0IsaURBTVg7Ozs7O0FBL0JlOztBQWtDbEIsSUFBSTtZQUNRLG9CQUFVLEtBQUs7QUFBekI7O0FBR0YsSUFBTSxrQkFBa0IseUJBQUMsT0FDdkI7U0FDRDtBQUVEOztrQkFBZSx5QkFBUSxpQkFBaUIsSyIsImZpbGUiOiI1LjFlODFlNmY0N2ZhNGZiNTdjNmQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vcm91dGVycy9yb3V0ZXMnXG5cbmNvbnN0IERpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBjb2xvcjogJyMzMzMnLFxuICBmb250U2l6ZTogMzJcbn0pXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc29sZS5sb2coKTtcbiAgICByZXR1cm4gKFxuICAgICAgPERpdiBjbGFzc05hbWU9J0FwcCc+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5NeSBSZWFjdCBTdGFydGVyPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3JvdXRlcygnaW5kZXgnKX0+XG4gICAgICAgICAgICAgIDxhPmluZGV4IHBhZ2U8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPXtyb3V0ZXMoJ2luZm8nKX0gcHJlZmV0Y2g+XG4gICAgICAgICAgICAgIDxhPmV4dHJhIHBhZ2U8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPXtyb3V0ZXMoJ2V4dHJhJyl9IHByZWZldGNoPlxuICAgICAgICAgICAgICA8YT5taXNzaW5nIHBhZ2U8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvRGl2PlxuICAgIClcbiAgfVxufVxuXG5BcHAucHJvcFR5cGVzID0ge1xuICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBcHApXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9BcHAuanMiXSwic291cmNlUm9vdCI6IiJ9