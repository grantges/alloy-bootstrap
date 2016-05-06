

/**
 * Constructor for the Walkthrough Page
 * @constructor
 */
(function _constructor(options){

  $.image.image = options.image;
  $.title.text = options.title;
  $.description.text = options.description

})($.args);


Object.defineProperty($, 'image', {
  get: function _getImage(){
    return $.image.image;
  },
  set: function _setImage(i){
    $.image.image = i;
  }
});

Object.defineProperty($, 'title', {
  get: function _getTitle(){
    return $.title.text;
  },
  set: function _setTitle(t){
    $.title.text = t;
  }
});

Object.defineProperty($, 'description', {
  get: function _getDescription(){
    return $.description.text;
  },
  set: function _setDescription(t){
    $.description.text = t;
  }
});
