
var _signatureDialog;

/**
 * Initializes the textInput widget
 * @constructor
 */
(function _constructor(options){
  $.container.width = options.width || Ti.UI.FILL,
  $.inputLabel.text = options.title || L('bootstrap-inputTextTitle', 'signature');

  if(options.titleColor){
    $.removeClass($.inputLabel, "primary");
    $.inputLabel.color = options.titleColor;
  }

  if(options.textColor){
    $.removeClass($.inputText, "dark-gray");
    $.inputText.color = options.textColor;
  }

})($.args);

function _onOpenSignatureDialog(e){

  _signatureDialog = $.UI.create('Ti.UI.Window', {
    backgroundColor: "#55000000"
  });

  var panel = Alloy.createWidget('ti.bootstrap', 'panel');

  $.addClass(panel.getView(), {
    classes: 'bottom-buffer left-buffer right-buffer',
    height: Ti.Platform.displayCaps.platformHeight / 2,
  });

  _signatureDialog.add(panel);
  _signatureDialog.open({animate: true});

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
