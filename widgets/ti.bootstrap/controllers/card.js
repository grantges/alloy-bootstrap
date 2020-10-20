
let _definedTextColor = null,
    _definedTitleColor = null,
    _definedSubTitleColor = null;

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

    $.cardImage.image = options.image;
    $.cardBkgImage.image = options.backgroundImage || null;
    $.cardTitle.color = options.titleColor;
    $.cardText.color = options.textColor;
    $.cardTitle.text = options.title;
    $.cardText.text = options.text
    
    _updateTextColor();

    $.wrapper.addEventListener('postlayout', _updateTextSize);

  })($.args);

  function _updateTextColor() {
    if($.cardBkgImage.image) {
      _definedTextColor = $.textColor;
      $.textColor = "#fff";

      _definedSubTitleColor = $.subTitleColor;
      $.subTitleColor = "#fff";

      _definedTitleColor = $.titleColor;
      $.titleColor = "#fff";

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

      $.cardTitle.applyProperties(fontStyleTitle);
      $.cardText.applyProperties(fontStyleText);
      $.cardSubTitle.applyProperties(fontStyleSubtitle);
    }

    $.wrapper.removeEventListener('postlayout', _updateTextSize);
  }

  Object.defineProperty($, 'backgroundImage', {
    get: function _getBackgroundImage(){
        return $.cardBkgImage.image
    },
    set: function _setImage(i){
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
        
    }
  });
  
  Object.defineProperty($, 'title', {
    get: function _getTitle(){
      return $.cardTitle.text;
    },
    set: function _setTitle(t){
      $.cardTitle.text = t;
    }
  });

  Object.defineProperty($, 'subtitle', {
    get: function _getTitle(){
      return $.cardSubTitle.text;
    },
    set: function _setTitle(t){
      $.cardSubTitle.text = t;
    }
  });
  
  Object.defineProperty($, 'text', {
    get: function _getDescription(){
      return $.cardText.text;
    },
    set: function _setDescription(t){
      $.cardText.text = t;
    }
  });

  Object.defineProperty($, 'titleColor', {
    get: function _getTitleColor(){
      return $.cardTitle.color;
    },
    set: function _setTitleColor(c){
      $.cardTitle.color = c;
    }
  });

  Object.defineProperty($, 'subTitleColor', {
    get: function _getTitleColor(){
      return $.cardSubTitle.color;
    },
    set: function _setTitleColor(c){
      $.cardSubTitle.color = c;
    }
  });
  
  Object.defineProperty($, 'textColor', {
    get: function _getTitleColor(){
      return $.cardText.color;
    },
    set: function _setTitleColor(c){
      $.cardText.color = c;
    }
  });