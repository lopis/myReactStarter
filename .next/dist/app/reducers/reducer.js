'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions/actions');

function reducer(state = [], action) {
  switch (action.type) {
    case _actions.CLICK:
      return state;
    default:
      return state;
  }
}

exports.default = reducer;