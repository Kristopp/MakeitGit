"use strict";

var _newDoTo = _interopRequireDefault(require("../src/Module/newDoTo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log('gogo'); //Global state

var state = {}; //Add new item

var toDo;
window.addEventListener('load', function () {
  toDO = new _newDoTo["default"]();
});
console.log('hello');