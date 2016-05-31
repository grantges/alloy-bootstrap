


/**
 * Initializes the textInput widget
 * @constructor
 */
(function _constructor(options){
  $.container.width = options.width || Ti.UI.FILL,
  $.inputLabel.text = options.title || L('bootstrap-inputTextTitle', 'title');

  if(options.titleColor){
    $.removeClass($.inputLabel, "primary");
    $.inputLabel.color = options.titleColor;
  }

  if(options.textColor){
    $.removeClass($.inputText, "dark-gray");
    $.inputText.color = options.textColor;
  }

})($.args);

function _onInputFocus(e){
  _translateLabelOut();
}

function _onInputBlur(e){
  if($.inputText.value === ''){
    _translateLabelIn();
  }
}

function _onInputChange(e){
  if($.inputText.value === ''){
    $.inputText.blur();
    $.inputCancel.visible = false;
  }
  else{
    $.inputCancel.visible = true;
  }
}

function _onInputCancel(e){
  $.inputText.value = '';
  $.inputCancel.visible = false;
  $.inputText.blur();
  _translateLabelIn();
}

function _translateLabelOut(){
  var a = Ti.UI.createAnimation({
    duration: 150,
    transform: Ti.UI.create2DMatrix().scale(0.7).translate(-5,-30),
    curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
  });
  $.inputLabel.animate(a);
}

function _translateLabelIn(){
  var a = Ti.UI.createAnimation({
    duration: 150,
    transform: Ti.UI.create2DMatrix().scale(1.0).translate(0,0),
    curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,
    left:0
  });
  $.inputLabel.animate(a);
}


Object.defineProperty($, 'title', {
  get: function _getTitle(){
    return $.inputLabel.text;
  },
  set: function _setTitle(title){
    $.inputLabel.text = title;
  }
});

Object.defineProperty($, 'titleColor', {
  get: function _getTitleColor(){
    return $.inputLabel.color;
  },
  set: function _setTitleColor(color){
    $.inputLabel.color = color;
  }
});

Object.defineProperty($, 'value', {
  get: function _getTextValue(){
    return $.inputText.value;
  },
  set: function _setTextValue(value){
    $.inputText.value = value;
  }
});

Object.defineProperty($, 'textColor', {
  get: function _getTextColor(){
    return $.inputText.color;
  },
  set: function _setTextColor(color){
    $.inputText.color = color;
  }
});
