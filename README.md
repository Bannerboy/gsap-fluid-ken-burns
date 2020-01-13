# gsap-fluid-ken-burns

Slow image pans can look "jittery". Using canvas can solve it on most browsers and pixel density. This is a handy way to do it.
This is especially useful when zooming on a div with a background image on Chrome 79.

Example: [demo]('./demo.html')

# How it works

This script replaces your reference image or div with a canvas. The zoomed image is then drawn canvas

## How to use

This can be called on a div with a background image, or on an image.

```
var kenburns = new KenBurns(element)

kenburns.scaleTo(1.1, 5)
kenburns.scaleFrom(1.1, 5)
```

new KenBurns(sourceElement): returns the canvas replacing the source element
kenburns.scaleTo(scaleFactor, *duration (optional)*, *ease (optional)*): returns a .to tween
kenburns.scaleFrom(scaleFactor, *duration (optional)*, *ease (optional)*): returns a .from tween

## Browser Support

Requires TweenMax 1.X
Tested on:
- Google Chrome 79 for macOS @1x/@2x
- Safari 13.0.4 for macOS @1x/@2x
- Firefox 71 for macOS @1x/@2x
- Internet Explorer 11 for Windows 10 @1x/@2x
- Microsoft Edge 44 for Windows 10 @1x/@2x
- Safari for iOS 13.3 @2x
