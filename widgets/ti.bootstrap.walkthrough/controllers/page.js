

/**
 * Constructor for the Walkthrough Page
 * @constructor
 * @param {Object} options - properties to pass to the Page object
 */
(function _constructor(options){

  $.image.image = options.image;
  $.title.text = options.title;
  $.description.text = options.description

  console.log(options.button);
  if(options.button){

    $.btnLabel.text = options.button.title;
    options.button.callback && $.actionBtn.addEventListener('click', options.button.callback);

    $.removeClass($.actionBtn, 'hide');
    $.addClass($.actionBtn, 'show');

  }

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
