function KenBurns(element) {
  var src = element.style.backgroundImage.match(/\((.*?)\)/)[1].replace(/('|")/g, '')
  var canvas = element.kenburns = document.createElement('canvas')
  var context = canvas.getContext('2d')
  var pixel = window.devicePixelRatio && window.devicePixelRatio >= 2 ? 2 : 1
  var image = new Image()
  var width = element.offsetWidth
  var height = element.offsetHeight
  var current = {scale: 1}

  image.onload = function() {
    canvas.style.width = width + 'px'
    canvas.width = width * pixel
    canvas.style.height = height + 'px'
    canvas.height = height * pixel
    canvas.getContext('2d').scale(pixel, pixel)

    render()

    element.style.backgroundImage = null
    element.appendChild(canvas)
  }

  function render() {
    context.clearRect(0, 0, width, height)
    context.save()
    context.translate(width * (1 - current.scale) * 0.5, height * (1 - current.scale) * 0.5)
    context.scale(current.scale, current.scale)
    context.drawImage(image, 0, 0, width, height)
    context.restore()
  }

  element.scaleTo = function(scale, duration, ease) {
    return TweenLite.to(current, duration || 1, {scale: scale, ease: ease || TweenLite.defaultEase, onUpdate: render})
  }

  element.scaleFrom = function(scale, duration, ease) {
    return TweenLite.from(current, duration || 1, {scale: scale, ease: ease || TweenLite.defaultEase, onUpdate: render})
  }

  image.src = src

  return element
}
