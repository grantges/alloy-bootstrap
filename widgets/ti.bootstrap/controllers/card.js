const _white = "#FFF";
const _lightGray = $.createStyle({classes:'gray'}).color;
const _darkGray = $.createStyle({classes:'dark-gray'}).color;

let _definedTextColor = _darkGray;
let _definedTitleColor = _darkGray;
let _definedSubTitleColor =  _lightGray;
let _onCardButtonClick = null;

let _backgroundGradient = {
    backgroundGradient: {
        type: 'linear',
        startPoint: { x: 0, y: '100%' },
        endPoint: { x: 0, y: 0 },
        colors: [ "#c000", '#0000']
    }
  };

/**
 * Constructor for the Walkthrough Page
 * @constructor
 * @param {Object} options - properties to pass to the Page object
 */
(function _constructor(options){

    $.cardBkgImage.image = options.backgroundImage || null;  
    _onCardButtonClick = options.onButtonClick || null;

    if(options.image) $.cardImage.image = options.image;
    if(options.titleColor) $.cardTitle.color = options.titleColor;
    if(options.textColor) $.cardText.color = options.textColor;
    if(options.subtitleColor) $.cardSubTitle.color = options.subtitleColor;
    if(options.title) $.cardTitle.text = options.title;
    if(options.text) $.cardText.text = options.text;
    if(options.subtitle) $.cardSubTitle.text = options.subtitle;
    if(options.buttonTitle) $.cardButton.title = options.buttonTitle;

    _updateTextColor();
    _updateView();

    $.wrapper.addEventListener('postlayout', _updateTextSize);
    $.cardButton.addEventListener('click', function(e){
      _onCardButtonClick && _onCardButtonClick(e);
    });

})($.args);


function _updateView() {

    const hiddenStyle = $.createStyle({
      visible: false,
      height: 0,
    });

    const visibleStyle = $.createStyle({
      visible: true,
      height: Ti.UI.SIZE
    });

    !$.cardSubTitle.text ? $.cardSubTitle.applyProperties(hiddenStyle) : $.cardSubTitle.applyProperties(visibleStyle);
    !$.cardImage.image ? $.cardImage.applyProperties(hiddenStyle) : $.cardImage.applyProperties(visibleStyle);
    !$.cardTitle.text ? $.cardTitle.applyProperties(hiddenStyle) : $.cardTitle.applyProperties(visibleStyle);
    !$.cardText.text ? $.cardText.applyProperties(hiddenStyle) : $.cardText.applyProperties(visibleStyle);
    !_onCardButtonClick ? $.actionsContainer.applyProperties(hiddenStyle) : $.actionsContainer.applyProperties(visibleStyle);

}

function _updateTextColor() {

    if($.cardBkgImage.image) {
      _definedTextColor = $.textColor;
      $.textColor = _white;

      _definedSubTitleColor = $.subTitleColor;
      $.subTitleColor = _white;

      _definedTitleColor = $.titleColor;
      $.titleColor = _white;

      $.cardContainer.applyProperties(_backgroundGradient);

    }
    else {
      $.textColor = _definedTextColor;
      $.titleColor = _definedTitleColor;
      $.subTitleColor = _definedSubTitleColor;
      $.cardContainer.applyProperties({
        backgroundGradient: null
      });
    }
};

function _updateTextSize() {

    let contentSize = $.wrapper.toImage();
  
    if(contentSize.width < ((App.Device.screenWidth*Ti.Platform.displayCaps.logicalDensityFactor)*.5)) {
      let fontStyleTitle = $.createStyle({
        classes: 'h5',
        left: 0,
        right: 0
      });
      let fontStyleText =  $.createStyle({
        classes: 'h6',
        left:0,
        right:0
      });
      let fontStyleSubtitle = $.createStyle({
        left:0,
        right:0
      });
      let fontStyleButton = $.createStyle({
          classes: 'btn-small'
      });

      $.cardTitle.applyProperties(fontStyleTitle);
      $.cardText.applyProperties(fontStyleText);
      $.cardSubTitle.applyProperties(fontStyleSubtitle);
      $.cardButton.applyProperties(fontStyleButton);
    }

    $.wrapper.removeEventListener('postlayout', _updateTextSize);
}

Object.defineProperty($, 'backgroundImage', {
    get: function _getBackgroundImage(){
        return $.cardBkgImage.image
    },
    set: function _setImage(i){
        if(i)
          $.cardBkgImage.image = i;
        _updateTextColor();
    }
});

Object.defineProperty($, 'backgroundColor', {
    get: function _getBackgroundImage(){
        return $.wrapper.backgroundColor
    },
    set: function _setImage(c){
      $.wrapper.backgroundColor = c;
      _updateView();
    }
});
  
Object.defineProperty($, 'image', {
    get: function _getImage(){
        return $.cardImage.image;
    },
    set: function _setImage(i){
        if(i) {
          $.cardImage.image = i;
          $.backgroundImage = null;
        }
        else $.cardImage.image = null;
        
        _updateView();
    }
});
  
Object.defineProperty($, 'title', {
    get: function _getTitle(){
      return $.cardTitle.text;
    },
    set: function _setTitle(t){
      $.cardTitle.text = t;
      _updateView();
    }
});

Object.defineProperty($, 'subtitle', {
    get: function _getTitle(){
      return $.cardSubTitle.text;
    },
    set: function _setTitle(t){
      $.cardSubTitle.text = t;
      _updateView();
    }
});
  
Object.defineProperty($, 'text', {
    get: function _getDescription(){
      return $.cardText.text;
    },
    set: function _setDescription(t){
      $.cardText.text = t;
      _updateView();
    }
});

Object.defineProperty($, 'buttonTitle', {
    get: function _getDescription(){
      return $.cardButton.title;
    },
    set: function _setDescription(t){
      $.cardButton.title = t;
      _updateView();
    }
});

Object.defineProperty($, 'onButtonClick', {
    get: function _getDescription(){
      return _onCardButtonClick;
    },
    set: function _setDescription(f){
      _onCardButtonClick= f;
      _updateView();
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

Object.defineProperty($, 'subTitleColor', {
    get: function _getTitleColor(){
      return $.cardSubTitle.color;
    },
    set: function _setTitleColor(c){
      _definedSubTitleColor = c;
      $.cardSubTitle.color = c;
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