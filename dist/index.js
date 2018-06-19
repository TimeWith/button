'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _colors = require('@time-with/colors');

var _mediaQueries = require('@time-with/media-queries');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _buttonStyle;

      var _props = this.props,
          type = _props.type,
          label = _props.label,
          icon = _props.icon,
          iconSide = _props.iconSide,
          buttonSize = _props.buttonSize,
          isBold = _props.isBold,
          color = _props.color,
          marginRight = _props.marginRight,
          marginLeft = _props.marginLeft,
          borderSize = _props.borderSize,
          borderStyle = _props.borderStyle,
          borderColor = _props.borderColor,
          isOutlined = _props.isOutlined,
          bgColor = _props.bgColor,
          txtColor = _props.txtColor,
          bgHoverColor = _props.bgHoverColor,
          txtHoverColor = _props.txtHoverColor,
          radius = _props.radius;
      var onClick = this.props.onClick;


      if (!type) {
        type = 'default';
      }
      if (!label) {
        label = 'Label Missing';
      }
      if (!icon) {
        icon = 'times';
      }
      if (!iconSide) {
        iconSide = 'right';
      }
      if (!buttonSize) {
        buttonSize = 'normal';
      }
      if (!isBold) {
        isBold = false;
      }
      if (!color) {
        color = '#7D7B7B';
      }
      if (!marginRight) {
        marginRight = '0px';
      }
      if (!marginLeft) {
        marginLeft = '0px';
      }
      if (!borderSize) {
        borderSize = '1px';
      }
      if (!borderStyle) {
        borderStyle = 'solid';
      }
      if (!borderColor) {
        borderColor = _colors.grey_medium;
      }
      if (!isOutlined) {
        isOutlined = false;
      }
      if (!bgColor) {
        bgColor = _colors.orange;
      }
      if (!txtColor) {
        txtColor = 'white';
      }
      if (!bgHoverColor) {
        bgHoverColor = '#e87656';
      }
      if (!txtHoverColor) {
        txtHoverColor = 'white';
      }
      if (!radius) {
        radius = '50px';
      }

      if (!isOutlined) {
        switch (type) {
          case 'warning':
            bgColor = _colors.orange;
            txtColor = 'white';
            bgHoverColor = '#e87656';
            txtHoverColor = 'white';
            break;
          case 'info':
            bgColor = _colors.blue;
            txtColor = 'white';
            bgHoverColor = 'rgb(88, 171, 206)';
            txtHoverColor = 'white';
            break;
          case 'danger':
            bgColor = '#ef4444';
            txtColor = 'white';
            bgHoverColor = '#ce3a3a';
            txtHoverColor = 'white';
            break;
          case 'success':
            bgColor = _colors.green;
            txtColor = 'white';
            bgHoverColor = '#68ab6d';
            txtHoverColor = 'white';
            break;
          case 'grey':
            bgColor = _colors.grey_medium;
            txtColor = 'white';
            bgHoverColor = '#7d7d7d';
            txtHoverColor = 'white';
            break;
          case 'custom':
            // no change
            break;
        }
      } else {
        switch (type) {
          case 'warning':
            borderColor = _colors.orange;
            bgColor = 'transparent';
            txtColor = _colors.orange;
            txtHoverColor = 'white';
            bgHoverColor = _colors.orange;
            break;
          case 'info':
            borderColor = _colors.blue;
            bgColor = 'transparent';
            txtColor = _colors.blue;
            txtHoverColor = 'white';
            bgHoverColor = _colors.blue;
            break;
          case 'danger':
            borderColor = '#ef4444';
            bgColor = 'transparent';
            txtColor = '#ef4444';
            txtHoverColor = 'white';
            bgHoverColor = '#ef4444';
            break;
          case 'success':
            borderColor = _colors.green;
            bgColor = 'transparent';
            txtColor = _colors.green;
            txtHoverColor = 'white';
            bgHoverColor = _colors.green;
            break;
          case 'grey':
            borderColor = _colors.grey_medium;
            bgColor = 'transparent';
            txtColor = _colors.grey_medium;
            txtHoverColor = 'white';
            bgHoverColor = _colors.grey_medium;
            break;
          case 'custom':
            // no change
            break;
          default:
            borderColor = _colors.orange;
            bgColor = 'transparent';
            txtColor = _colors.orange;
            txtHoverColor = 'white';
            bgHoverColor = _colors.orange;
        }
      }

      var buttonStyle = (_buttonStyle = {
        backgroundColor: bgColor,
        fontSize: buttonSize === 'large' ? '20px' : '18px',
        padding: buttonSize === 'large' ? '13px 60px 15px 60px' : '8px 30px 8px 30px',
        fontWeight: isBold ? 'bold' : 'normal',
        color: txtColor,
        outline: '0',
        border: isOutlined ? borderSize + ' ' + borderStyle + ' ' + borderColor : 'none',
        borderRadius: radius,
        cursor: 'pointer',
        WebkitTransition: 'all 0.2s ease-out',
        MozTransition: 'all 0.2s ease-out',
        Otransition: 'all 0.2s ease-out',
        transition: 'all 0.2s ease-out',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',
        boxShadow: 'none'
      }, _defineProperty(_buttonStyle, 'WebkitTransition', 'all 0.2s ease-out'), _defineProperty(_buttonStyle, 'MozTransition', 'all 0.2s ease-out'), _defineProperty(_buttonStyle, 'Otransition', 'all 0.2s ease-out'), _defineProperty(_buttonStyle, 'transition', 'all 0.2s ease-out'), _defineProperty(_buttonStyle, '& .svg-inline--fa', {
        WebkitTransition: 'color 0.2s ease-out',
        MozTransition: 'color 0.2s ease-out',
        Otransition: 'color 0.2s ease-out',
        transition: 'color 0.2s ease-out',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',
        boxShadow: 'none',
        marginRight: iconSide === 'left' ? '8px' : '0px',
        marginLeft: iconSide === 'right' ? '8px' : '0px',
        color: 'inherit',
        fontSize: buttonSize === 'large' ? '18px' : '16px',
        position: 'relative',
        top: '1px'
      }), _defineProperty(_buttonStyle, '& span', {
        WebkitTransition: 'color 0.2s ease-out',
        MozTransition: 'color 0.2s ease-out',
        Otransition: 'color 0.2s ease-out',
        transition: 'color 0.2s ease-out',
        color: 'inherit',
        fontSize: 'inherit',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',
        boxShadow: 'none'
      }), _defineProperty(_buttonStyle, ':hover', {
        color: txtHoverColor,
        backgroundColor: bgHoverColor + ' !important',
        '& span': {
          color: txtHoverColor
        },
        '& .svg-inline--fa': {
          color: txtHoverColor
        }
      }), _buttonStyle);

      switch (buttonSize) {
        case 'large':
          buttonStyle[_mediaQueries.desktop_max] = {
            padding: '12px 55px',
            fontSize: '19px'
          };
          buttonStyle[_mediaQueries.tablet_max] = {
            padding: '11px 45px',
            fontSize: '18px'
          };
          buttonStyle[_mediaQueries.phablet_max] = {
            padding: '10px 35px',
            fontSize: '17px'
          };
          buttonStyle[_mediaQueries.phone_max] = {
            padding: '9px 30px',
            fontSize: '16px'
          };
          break;
        default:
          buttonStyle[_mediaQueries.desktop_max] = {
            padding: '8px 30px',
            fontSize: '17px'
          };
          buttonStyle[_mediaQueries.tablet_max] = {
            padding: '7px 25px',
            fontSize: '18px'
          };
          buttonStyle[_mediaQueries.phablet_max] = {
            padding: '6px 20px',
            fontSize: '15px'
          };
          buttonStyle[_mediaQueries.phone_max] = {
            padding: '5px 18px',
            fontSize: '14px'
          };
          break;
      }

      var ButtonRoot = _glamorous2.default.button(buttonStyle);

      var iconEl = _react2.default.createElement(_reactFontawesome2.default, { icon: icon });

      return _react2.default.createElement(
        ButtonRoot,
        { onClick: onClick },
        iconSide === 'left' ? iconEl : null,
        _react2.default.createElement(
          'span',
          null,
          label
        ),
        iconSide === 'right' ? iconEl : null
      );
    }
  }]);

  return Button;
}(_react.Component);

exports.default = Button;
//# sourceMappingURL=index.js.map