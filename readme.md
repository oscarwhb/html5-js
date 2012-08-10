# HTML5 Enabling Script

A minimal shim to enable use of HTML5 elements in Internet Explorer 6, 7 and 8.

For a more robust alternative, check out the [html5shiv](https://github.com/aFarkas/html5shiv).

## Get started

Include script just before the closing head tag.<br>
_IE need to be aware about the elements before rendering the page._

Add HTML5 display definitions to your stylesheet.

```css
/* Corrects block display not defined in IE6/7/8/9 & FF3 */
article, aside, details, figcaption, figure,
footer, header, hgroup, nav, section, summary {
  display: block;
}
/* Corrects inline-block display not defined in IE6/7/8/9 & FF3 */
audio, canvas, video {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}
```

## Resources

[Online YUI Compressor](http://www.refresh-sf.com/yui/)<br>
[normalize.css](https://github.com/necolas/normalize.css)

## License

This is free and unencumbered software released into the public domain.<br>
For more information, please refer to: http://unlicense.org