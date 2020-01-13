TweenMax.to('#regular-gsap>*', 5, {scale: 1.1})

var element = document.querySelector('#canvas-kenburns>*')
new KenBurns(element)

element.scaleTo(1.1, 5)
// element.scaleFrom(1.1, 5)
