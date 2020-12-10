const icons = require('bootstrap/icons.json');

const HEIGHT = (Alloy.CFG.TiDetect && Alloy.CFG.TiDetect.hasNotch) ? 100 : 75;

let _callback = null,
    _dismissOnClick = true,
    _position = 'bottom',
    _icon = null;

/**
 * Initialization function for the object
 * @params {Object} options - dictionary object of initialization settings.
 * @constructor
 */
(function _constructor(options){
   options = options || {};
  /**
   * Style the toast as needed
   */
  $.toast.borderColor = options.borderColor;
  $.toast.backgroundColor = options.backgroundColor;
  $.title.color = $.icon.color = options.color || "#FFF";
  _dismissOnClick = options.dismissOnClick;
  
  _position = options.position;

  $.toast.height = HEIGHT;

  if(_position === 'bottom') {
    $.toast.top = Ti.Platform.displayCaps.platformHeight;
  }
  else {
    $.message.top = 30;
    $.toast.top = -1*HEIGHT;
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
  
  _dismissOnClick && _close();
}

/**
 * Displays the Toast alert
 */
function _open(){

  let animation = null;
  if(_position === 'bottom') {
    animation = Ti.UI.createAnimation({
      top: Ti.Platform.displayCaps.platformHeight - HEIGHT,
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
$.open = _open;

/**
 * Closes the toast alert
 */
function _close(){

  if($.toast){
      const animation = (_position === 'bottom') ?
      Ti.UI.createAnimation({
        top: Ti.Platform.displayCaps.platformHeight,
        duration: 150,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT
      }) :
      Ti.UI.createAnimation({
        top: -1*HEIGHT,
        duration: 150,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT
      });

    $.toast.animate(animation, function(){
      $.toast && $.toast.close();
      $.toast = null;
      $.destroy();
    });
  }
}
$.close = _close;

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
