const _white = "#FFF";
const _lightGray = $.createStyle({classes:'gray'}).color;
const _darkGray = $.createStyle({classes:'dark-gray'}).color;

let _definedTextColor = _darkGray;
let _definedTitleColor = _darkGray;
let _definedSubTitleColor =  _lightGray;
let _onCardButtonClick = null;

let _views = [];

/**
 * Constructor for the Walkthrough Page
 * @constructor
 * @param {Object} options - properties to pass to the Page object
 */
(function _constructor(options) {

    $.cardBkgImage.image = options.backgroundImage || null;  
    
    if(options.titleColor) $.cardTitle.color = options.titleColor;
    if(options.textColor) $.cardText.color = options.textColor;
    if(options.subtitleColor) $.cardSubTitle.color = options.subtitleColor;
    if(options.title) $.cardTitle.text = options.title; 
    if(options.text) $.cardText.text = options.text;
    if(options.subtitle) $.cardSubTitle.text = options.subtitle;

    /**
     * Setup Avatar
     */
    $.userAvatar.getView().top = -37.5;
    $.userAvatar.getView().left = 20;
    $.userAvatar.viewBorderColor = $.wrapper.backgroundColor;

    _hideViewContainer();

})($.args);

$.addView = function _addView(_view) {
  if(_view){
    $.extendedViews.add(_view);
    _views.push(_view);
    _showViewContainer();
  }
};

$.removeAllViews = function _removeView() {
    if(this.views.length){
      _.each(this.views, function(_view){
        $.extendedViews.remove(_view);
      });
    }  
}

function _showViewContainer() {
  $.extendedViewsContainer.visible = true;
  $.extendedViewsContainer.height = Ti.UI.SIZE;
}

function _hideViewContainer() {
  $.extendedViewsContainer.visible = false;
  $.extendedViewsContainer.height = 0;
}

/**
 * Avatar Properties
 */

 Object.defineProperty($, 'avatar', {
  get: function _getAvatarImage(){
    return $.userAvatar.viewImage;
  },
  set: function _setAvatarImage(i) {
    console.log('Avatar Image = ' + i);
    $.userAvatar.viewImage = i;
  }
 });

/**
 * Profile Background Properties
 */
Object.defineProperty($, 'backgroundImage', {
  get: function _getBackgroundImage(){
      return $.cardBkgImage.image
  },
  set: function _setBackgroundImage(i){
      if(i) {
        $.cardBkgImage.image = i;
      }
  }
});

Object.defineProperty($, 'backgroundColor', {
  get: function _getBackgroundColor(){
      return $.wrapper.backgroundColor
  },
  set: function _setBackgroundColor(c){
    $.wrapper.backgroundColor = c;
    $.userAvatar.viewBorderColor = c;
  }
});

/**
 * Profile Title Properties
 */  
Object.defineProperty($, 'title', {
  get: function _getTitle(){
    return $.cardTitle.text;
  },
  set: function _setTitle(t){
    $.cardTitle.text = t;
  }
});

Object.defineProperty($, 'titleColor', {
  get: function _getTitleColor(){
    return $.cardTitle.color;
  },
  set: function _setTitleColor(c){
    _definedTitleColor = c;
    $.cardTitle.color = c;
  }
});

/**
 * Profile subtitle properties
 */

Object.defineProperty($, 'subtitle', {
  get: function _getTitle(){
    return $.cardSubTitle.text;
  },
  set: function _setTitle(t){
    $.cardSubTitle.text = t;
  }
});

Object.defineProperty($, 'subTitleColor', {
  get: function _getTitleColor(){
    return $.cardSubTitle.color;
  },
  set: function _setTitleColor(c){
    _definedSubTitleColor = c;
    $.cardSubTitle.color = c;
  }
});


/** 
 * Profile Text properties
 */  
Object.defineProperty($, 'text', {
  get: function _getDescription(){
    return $.cardText.text;
  },
  set: function _setDescription(t){
    $.cardText.text = t;
  }
});
  
Object.defineProperty($, 'textColor', {
  get: function _getTitleColor(){
    return $.cardText.color;
  },
  set: function _setTitleColor(c){
    _definedTextColor = c;
    $.cardText.color = c;
  }
});