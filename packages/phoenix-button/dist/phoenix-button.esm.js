import React from 'react';
import styled from 'styled-components';

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
var ButtonStyled = styled.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: green;\n"])));

var Button = function Button(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(ButtonStyled, null, children);
};

export { Button };
