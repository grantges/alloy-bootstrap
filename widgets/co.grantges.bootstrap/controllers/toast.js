var _callback = null,
    _icon = null,
    _title = null;

/**
 * Initialization function for the object
 * @params {Object} options - dictionary object of initialization settings.
 * @constructor
 */
(function _constructor(options){

  $.toast.top = Ti.Platform.displayCaps.platformHeight;
  $.title.text = options.title;

  /**
   * Icon setup, defaults to envelope
   */
  _icon = options.icon || 'envelope-o';
  var iconStyle = $.createStyle({
    classes: ['icon-' + _icon]
  });
  $.icon.applyProperties(iconStyle);

  /**
   * Style the toast as needed
   */
  options.borderColor && ($.toast.borderColor = options.borderColor);
  options.backgroundColor && ($.toast.backgroundColor = options.backgroundColor);
  if(options.color){
    $.title.color = $.icon.color = options.color;
  }

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
  var animation = Ti.UI.createAnimation({
    top: Ti.Platform.displayCaps.platformHeight - 75,
    duration: 150,
    curve: Ti.UI.ANIMATION_CURVE_EASE_OUT
  });

  $.toast.open(animation);
}

/**
 * Closes the toast alert
 */
$.close = function _close(){
  $.toast.animate({
    top: Ti.Platform.displayCaps.platformHeight,
    duration: 150,
    curve: Ti.UI.ANIMATION_CURVE_EASE_IN
  }, function(){
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
    var iconStyle = $.createStyle({
      classes: ['icon-' + icon]
    });
    $.icon.applyProperties(iconStyle);
  }
});
