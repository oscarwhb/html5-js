# HTML5 Enabling Script

A minimal shim to enable use of HTML5 elements in legacy browsers.

## Get started

Include script just before the closing head tag.<br>
_IE need to be aware about the elements before rendering the page._

Add HTML5 display definitions to your stylesheet.

```css
header, hgroup, footer, article, section, aside, nav,
figcaption, details, summary {
  display: block;
}
figure, embed, audio, video, canvas {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}
```

## Resources

[Online YUI Compressor](http://www.refresh-sf.com/yui/)<br>
[initial-css](https://github.com/niclasgelin/initial-css)

## License

This is free and unencumbered software released into the public domain.<br>
For more information, please refer to: http://unlicense.org