
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

#### label (string)
Type: `String` Default: `''`

#### icon (font awesome 5 icon name)
Type: `String` Default: `null`

#### iconSide (left / right)
Type: `String` Default: `right`

#### buttonSize (large / normal)
Type: `String` Default: `normal`

#### isBold (true / false)
Type: `String` Default: `false`

#### color (string)
Type: `String` Default: `#7D7B7B`

#### marginRight (string)
Type: `String` Default: `0px`

#### marginLeft (string)
Type: `String` Default: `0px`

#### borderSize (string)
Type: `String` Default: `1px`

#### borderStyle (solid / dashed)
Type: `String` Default: `solid`

#### borderColor (string)
Type: `String` Default: @time-with/colors: `grey_medium`

#### isOutlined (true / false)
Type: `String` Default: `false`

#### bgColor (string)
Type: `String` Default: @time-with/colors: `orange`

#### txtColor (string)
Type: `String` Default: `white`

#### bgHoverColor (string)
Type: `String` Default: `#e87656`

#### txtHoverColor (string)
Type: `String` Default: `white`

#### radius (string)
Type: `String` Default: `50px`

#### onClick (function)
Type: `String` Default: `null`


## License

MIT
