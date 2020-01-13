TweenMax.to('#regular-gsap>*', 5, {scale: 1.1})

var kenburns = document.querySelector('#canvas-kenburns>*')
kenburns = new KenBurns(kenburns)

kenburns.scaleTo(1.1, 5)
// kenburns.scaleFrom(1.1, 5)
