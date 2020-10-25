const icons = require('bootstrap/icons.json');

let _callback = null,
    _position = 'bottom',
    _icon = null;

/**
 * Initialization function for the object
 * @params {Object} options - dictionary object of initialization settings.
 * @constructor
 */
(function _constructor(options){

  /**
   * Style the toast as needed
   */
  options.borderColor && ($.toast.borderColor = options.borderColor);
  options.backgroundColor && ($.toast.backgroundColor = options.backgroundColor);
  $.title.color = $.icon.color = options.color || "#FFF";

  if(options.position) {
    _position = options.position;
  }


  if(_position === 'bottom') {
    $.toast.top = Ti.Platform.displayCaps.platformHeight;
  }
  else {
    $.toast.top = -75
  }
  $.title.text = options.title;

  /**
   * Icon setup, defaults to envelope
   */
 
  _icon = options.icon || 'icon-bell';
  $.icon.text = icons[_icon];

  
  /**
   * Set callback function if required
   */
  _callback = options.onClick;

})($.args);

/**
 * Click event callback
 * @param {Object} e event object returned by handler
 */
function _onToastClick(e){
  Ti.Analytics.featureEvent('com.grantges.bootstrap.toast.clicked');
  _callback && _callback(e);
}

/**
 * Displays the Toast alert
 */
$.open = function _open(){

  let animation = null;
  if(_position === 'bottom') {
    animation = Ti.UI.createAnimation({
      top: Ti.Platform.displayCaps.platformHeight - 75,
      duration: 150,
      curve: Ti.UI.ANIMATION_CURVE_EASE_OUT
    });
  }
  else {
    animation = Ti.UI.createAnimation({
      top: 0,
      duration: 150,
      curve: Ti.UI.ANIMATION_CURVE_EASE_OUT
    });
  }

  $.toast.open(animation);

}

/**
 * Closes the toast alert
 */
$.close = function _close(){

  const animation = (_position === 'bottom') ?
    Ti.UI.createAnimation({
      top: Ti.Platform.displayCaps.platformHeight,
      duration: 150,
      curve: Ti.UI.ANIMATION_CURVE_EASE_OUT
    }) :
    Ti.UI.createAnimation({
      top: -75,
      duration: 150,
      curve: Ti.UI.ANIMATION_CURVE_EASE_OUT
    });

  $.toast.animate(animation, function(){
    $.toast.close();
  });
}

/**
 * Toast border color
 * @property
 */
Object.defineProperty($, 'borderColor', {
  get: function _getBorderColor(){
    return $.toast.borderColor;
  },
  set: function _setBorderColor(c){
    $.toast.borderColor = c;
  }
});

/**
 * Toast background color
 * @property
 */
Object.defineProperty($, 'backgroundColor', {
  get: function _getBackgroundColor(){
    return $.toast.backgroundColor;
  },
  set: function _setBackgroundColor(c){
    $.toast.backgroundColor = c;
  }
});

/**
 * Toast font color
 * @property
 */
Object.defineProperty($, 'color', {
  get: function _getColor(){
    return $.title.color;
  },
  set: function _setColor(c){
    $.title.color = $.icon.color = c;
  }
});

/**
 * Toast Icon
 * @property
 */
Object.defineProperty($, 'icon', {
  get: function _getBackgroundColor(){
    return _icon;
  },
  set: function _setBackgroundColor(icon){
    $.icon.applyProperties({text: icons[icon]});
  }
});

/**
 * Toast Position
 * @property
 */
Object.defineProperty($, 'position', {
  get: function _getPosition(){
    return _position;
  },
  set: function _setPosition(position){

    if(position !== 'bottom' || position !== 'top') {
      throw(new Error('Toast position is not valid. Toast positions must be one of `bottom` or `top`.'));
    }

    _position = position;
  }
});
