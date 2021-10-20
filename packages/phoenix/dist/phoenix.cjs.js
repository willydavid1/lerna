'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var _templateObject;

var ButtonStyled = styled__default["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: green;\n"])));

var Button = function Button(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement(ButtonStyled, null, children);
};

var Text = function Text(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement("p", null, children);
};

exports.Button = Button;
exports.Text = Text;
