// Smooth Scroll to Element
function scrollPageTo(to) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  var easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  return new Promise((resolve, reject) => {
    var element = document.scrollingElement;

    if (typeof to === 'string') {
      to = document.querySelector(to) || reject();
    }
    if (typeof to !== 'number') {
      to = to.getBoundingClientRect().top + element.scrollTop;
    }

    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = () => {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      } else {
        resolve();
      }
    };
    animateScroll();
  });
}