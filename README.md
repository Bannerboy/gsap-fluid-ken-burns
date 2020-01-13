# GSAP Fluid Ken Burns

Slow image pans can look "jittery". Using canvas can solve it on most browsers and pixel density. This is a handy way to do it.

Example: [demo](https://bannerboy.github.io/gsap-fluid-ken-burns/demo.html)

## How it works

This script adds a canvas in a div with background image. The zoomed image is then drawn in this canvas, and removed from the css property background image. Here is what it does step by step:

- Create a canvas
- Place it inside the div
- Remove the backgroundImage from that div
- Draw the image onto the canvas
- Adds `.scaleTo()` and `.scaleFrom()` methods to the div
- Returns the div

## How to use

This can be called on a div with a background image, or on an image.

```html
<!-- Import TweenLite/TweenMax if you don't have aldeady -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js'></script>
<!-- Import the kenburns script -->
<script type="text/javascript" src="kenburns.js"></script>
```

```javascript
// new KenBurns(element) - element must be a div with a background-image
var element = document.getElementById('zoomed-image')
new KenBurns(element) // returns the element with added methods to allow chaining

// element.scaleTo(scale, duration = 1, ease = TweenLite.defaultEase)
element.scaleTo(1.1, 5) // returns a tween
// element.scaleTo(scale, duration = 1, ease = TweenLite.defaultEase)
element.scaleFrom(1.1, 5) // returns a tween

element.kenburns // access the canvas added by the script
```

## Known limitations

- This only works for divs with background image
- It doesn't support transformOrigin: it only scales from and to the center

## Browser Support

**Requires TweenMax 1.X**

Tested on:
- Google Chrome 79 for macOS @1x/@2x
- Safari 13.0.4 for macOS @1x/@2x
- Firefox 71 for macOS @1x/@2x
- Internet Explorer 11 for Windows 10 @1x/@2x
- Microsoft Edge 44 for Windows 10 @1x/@2x
- Safari for iOS 13.3 @2x
