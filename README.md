
# Timewith Button

General purpose Button

## Sizes:
- large
- normal

## Types:
- standard
- warning
- success
- danger
- grey
- custom

## Install

```bash
$ npm install @time-with/button
or
$ yarn add @time-with/button
```

## Usage

    import Button from '@time-with/button';

    <Button
      icon='arrow-right'
      onClick={this.handleClick}
      buttonSize='large'
      label='View Profile'
    />

## Options

#### type (warning / info / danger / success / grey / standard / custom)
Type: `String` Default: `standard`

#### label
Type: `String` Default: `''`

#### icon (font awesome 5 icon name)
Type: `String` Default: `null`

#### iconSide (left / right)
Type: `String` Default: `right`

#### buttonSize (large / normal)
Type: `String` Default: `normal`

#### isBold
Type: `Boolean` Default: `false`

#### color
Type: `String` Default: `#7D7B7B`

#### marginRight
Type: `Number/String` Default: `0px`

#### marginLeft
Type: `Number/String` Default: `0px`

#### borderSize
Type: `String` Default: `1px`

#### borderStyle (solid / dashed)
Type: `String` Default: `solid`

#### borderColor
Type: `String` Default: @time-with/colors: `grey_medium`

#### isOutlined
Type: `Boolean` Default: `false`

#### bgColor
Type: `String` Default: @time-with/colors: `orange`

#### txtColor
Type: `String` Default: `white`

#### bgHoverColor
Type: `String` Default: `#e87656`

#### txtHoverColor
Type: `String` Default: `white`

#### radius
Type: `Number/String` Default: `50px`

#### onClick
Type: `Function` Default: `null`

#### iconAnimation
Type: `Glamor keyframes object` Default: `null`

#### iconAnimationTime
Type: `String` Default: `5s`


## License

MIT
