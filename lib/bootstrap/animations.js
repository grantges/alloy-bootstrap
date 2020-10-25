
/**
 * Animation utility library for ti-bootstrap
 */
var ANIMATION_DURATION = 250;

var Animations = {
  fadeIn: Ti.UI.createAnimation({
    opacity: 1.0,
    duration: ANIMATION_DURATION,
    curve: Ti.UI.ANIMATION_CURVE_EASE_OUT
  }),

  fadeOut: Ti.UI.createAnimation({
    opacity: 0.0,
    duration: ANIMATION_DURATION,
    curve: Ti.UI.ANIMATION_CURVE_EASE_OUT
  }),

  openFromBottom: function(win, callback) {
    
    win.top = Ti.Platform.displayCaps.platformHeight;

    const a = Ti.UI.createAnimation({
      top: 0,
      opacity: 1.0,
      duration: ANIMATION_DURATION,
      curve: Ti.UI.ANIMATION_CURVE_EASE_OUT
    });

    callback && win.addEventListener('open', callback);
    win.open({animation: a});

  }
};

module.exports = Animations;
