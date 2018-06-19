import React, { Component } from 'react';
import FontAwesome from '@fortawesome/react-fontawesome'
import glamorous from 'glamorous'
import { orange, blue, green, grey_medium } from '@time-with/colors'
import { desktop_max, tablet_max, phablet_max, phone_max } from '@time-with/media-queries'

class Button extends Component {
  render() {

    let {
      type, 
      label, 
      icon, 
      iconSide, 
      buttonSize, 
      isBold, 
      color, 
      marginRight, 
      marginLeft,
      borderSize,
      borderStyle,
      borderColor,
      isOutlined,
      bgColor,
      txtColor,
      bgHoverColor,
      txtHoverColor,
      radius
    } = this.props

    const {
      onClick,
    } = this.props

    if (!type)          { type = 'default' }
    if (!label)         { label = 'Label Missing' }
    if (!icon)          { icon = 'times' }
    if (!iconSide)      { iconSide = 'right' }
    if (!buttonSize)    { buttonSize = 'normal' }
    if (!isBold)        { isBold = false }
    if (!color)         { color = '#7D7B7B' }
    if (!marginRight)   { marginRight = '0px' }
    if (!marginLeft)    { marginLeft = '0px' }
    if (!borderSize)    { borderSize = '1px' }
    if (!borderStyle)   { borderStyle = 'solid' }
    if (!borderColor)   { borderColor = grey_medium }
    if (!isOutlined)    { isOutlined = false }
    if (!bgColor)       { bgColor = orange }
    if (!txtColor)      { txtColor = 'white' }
    if (!bgHoverColor)  { bgHoverColor = '#e87656' }
    if (!txtHoverColor) { txtHoverColor = 'white' }
    if (!radius)        { radius = '50px' }


    if (!isOutlined) {
      switch(type) {
        case 'warning':
          bgColor = orange
          txtColor = 'white'
          bgHoverColor = '#e87656'
          txtHoverColor = 'white'
        break;
        case 'info':
          bgColor = blue
          txtColor = 'white'
          bgHoverColor = 'rgb(88, 171, 206)'
          txtHoverColor = 'white'
        break;
        case 'danger':
          bgColor = '#ef4444'
          txtColor = 'white'
          bgHoverColor = '#ce3a3a'
          txtHoverColor = 'white'
        break;
        case 'success':
          bgColor = green
          txtColor = 'white'
          bgHoverColor = '#68ab6d'
          txtHoverColor = 'white'
        break;
        case 'grey':
          bgColor = grey_medium
          txtColor = 'white'
          bgHoverColor = '#7d7d7d'
          txtHoverColor = 'white'
        break;
        case 'custom':
          // no change
        break;
      }
    } else {
      switch(type) {
        case 'warning':
          borderColor = orange
          bgColor = 'transparent'
          txtColor = orange
          txtHoverColor = 'white'
          bgHoverColor = orange
        break;
        case 'info':
          borderColor = blue
          bgColor = 'transparent'
          txtColor = blue
          txtHoverColor = 'white'
          bgHoverColor = blue
        break;
        case 'danger':
          borderColor = '#ef4444'
          bgColor = 'transparent'
          txtColor = '#ef4444'
          txtHoverColor = 'white'
          bgHoverColor = '#ef4444'
        break;
        case 'success':
          borderColor = green
          bgColor = 'transparent'
          txtColor = green
          txtHoverColor = 'white'
          bgHoverColor = green
        break;
        case 'grey':
          borderColor = grey_medium
          bgColor = 'transparent'
          txtColor = grey_medium
          txtHoverColor = 'white'
          bgHoverColor = grey_medium
        break;
        case 'custom':
          // no change
        break;
        default:
          borderColor = orange
          bgColor = 'transparent'
          txtColor = orange
          txtHoverColor = 'white'
          bgHoverColor = orange
      }
    }

    const buttonStyle = {
      backgroundColor: bgColor,
      fontSize: buttonSize === 'large' ? '20px' : '18px',
      padding: buttonSize === 'large' ? '13px 60px 15px 60px' : '8px 30px 8px 30px',
      fontWeight: isBold ? 'bold' : 'normal',
      color: txtColor,
      outline: '0',
      border: isOutlined ? `${borderSize} ${borderStyle} ${borderColor}` : 'none',
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
      boxShadow: 'none',
      WebkitTransition: 'all 0.2s ease-out',
      MozTransition: 'all 0.2s ease-out',
      Otransition: 'all 0.2s ease-out',
      transition: 'all 0.2s ease-out',
      '& .svg-inline--fa': {
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
        top: '1px',
      },
      '& span': {
        WebkitTransition: 'color 0.2s ease-out',
        MozTransition: 'color 0.2s ease-out',
        Otransition: 'color 0.2s ease-out',
        transition: 'color 0.2s ease-out',
        color: 'inherit',
        fontSize: 'inherit',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',
        boxShadow: 'none',
      },
      ':hover': {
        color: txtHoverColor,
        backgroundColor: `${bgHoverColor} !important`,
        '& span': {
          color: txtHoverColor,
        },
        '& .svg-inline--fa': {
          color: txtHoverColor,
        },
      },
    }

    switch(buttonSize) {
      case 'large':
        buttonStyle[desktop_max] = {
          padding: '12px 55px',
          fontSize: '19px',
        }
        buttonStyle[tablet_max] = {
          padding: '11px 45px',
          fontSize: '18px',
        }
        buttonStyle[phablet_max] = {
          padding: '10px 35px',
          fontSize: '17px',
        }
        buttonStyle[phone_max] = {
          padding: '9px 30px',
          fontSize: '16px',
        }
      break;
      default:
        buttonStyle[desktop_max] = {
          padding: '8px 30px',
          fontSize: '17px',
        }
        buttonStyle[tablet_max] = {
          padding: '7px 25px',
          fontSize: '18px',
        }
        buttonStyle[phablet_max] = {
          padding: '6px 20px',
          fontSize: '15px',
        }
        buttonStyle[phone_max] = {
          padding: '5px 18px',
          fontSize: '14px',
        }
      break;
    }
        
    const ButtonRoot = glamorous.button(buttonStyle)

    const iconEl = <FontAwesome icon={icon} />

    return (
      <ButtonRoot onClick={onClick}>
        { iconSide === 'left' ? iconEl : null }
        <span>{ label }</span>
        { iconSide === 'right' ? iconEl : null }
      </ButtonRoot>
    );
  }
}

export default Button;