
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
  })
};

module.exports = Animations;
