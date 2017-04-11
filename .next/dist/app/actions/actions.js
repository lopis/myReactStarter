'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.click = click;
/*
 * action types
 */
const CLICK = exports.CLICK = 'CLICK';

/*
 * action creators
 */
function click() {
  return {
    type: CLICK
  };
}