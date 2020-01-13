# gsap-fluid-ken-burns

Slow image pans can look "jittery". Using canvas can solve it on most browsers and pixel density. This is a handy way to do it.

Example: [demo](demo.html)

# How it works

This script replaces your reference image or div with a canvas. The zoomed image is then drawn canvas

## How to use

This can be called on a div with a background image, or on an image.

```html
<!-- Import TweenLite/TweenMax if you don't have aldeady -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js'></script>
<!-- Import the kenburns script -->
<script type="text/javascript" src="kenburns.js"></script>
```

```javascript
// new KenBurns(element)
var kenburns = new KenBurns(document.getElementById('zoomed-image')) // element can be a div or an image

// kenburns.scaleTo(scale, duration = 1, ease = TweenLite.defaultEase)
kenburns.scaleTo(1.1, 5) // returns a tween
// kenburns.scaleTo(scale, duration = 1, ease = TweenLite.defaultEase)
kenburns.scaleFrom(1.1, 5) // returns a tween
```

- new KenBurns(sourceElement): returns the canvas replacing the source element
- kenburns.scaleTo(scaleFactor, *duration (optional)*, *ease (optional)*): returns a .to tween
- kenburns.scaleFrom(scaleFactor, *duration (optional)*, *ease (optional)*): returns a .from tween

## Browser Support

**Requires TweenMax 1.X**

Tested on:
- Google Chrome 79 for macOS @1x/@2x
- Safari 13.0.4 for macOS @1x/@2x
- Firefox 71 for macOS @1x/@2x
- Internet Explorer 11 for Windows 10 @1x/@2x
- Microsoft Edge 44 for Windows 10 @1x/@2x
- Safari for iOS 13.3 @2x
