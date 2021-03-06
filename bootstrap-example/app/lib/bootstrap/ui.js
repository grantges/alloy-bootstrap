const icons = require('bootstrap/icons.json');

/**
 * Creates an Alloy Bootstrap Input object of specified type ('text', 'signature', 'checkbox')
 * @param {Object} options 
 */
exports.createInput = (options) => {
  if(!options.type){
    throw new Error('Unable to create Boostap Form Input. No type specified.');
  }
  return Alloy.createWidget('ti.bootstrap', 'input_'+ options.type.toLowerCase(), options);
};

/**
 * Creates an Icon Label
 * @param {Object} args -   list of properties passed to the createIconFont function from the Alloy XML or calling function.
 *                          Required parameter(s)
 *                          : icon - one of the glyph references from the list above.
 */
exports.createIconFont = (args) => {
    
  const icon = args.icon ? icons[args.icon] : null;

  const props = _.extend(args, {
      font:{
          fontSize: (args.font && args.font.fontSize) ? args.font.fontSize : null,
          fontWeight: (args.font && args.font.fontWeight) ? args.font.fontWeight : null
      }
  });

  const wrapper = Ti.UI.createView({
      layout:'horizontal',
      height: Ti.UI.SIZE,
      width: Ti.UI.SIZE,
  });

  const iconFont =  Ti.UI.createLabel(props);
  iconFont.font = {fontFamily:'icomoon'}; 
  iconFont.text = icon;
  wrapper.add(iconFont);

  if(args.text) { 
      const textLabel = Ti.UI.createLabel(props);
      textLabel.text = args.text;
      textLabel.left = 10;
      wrapper.add(textLabel);
  }
  
  return wrapper;
};
exports.createIconLabel = exports.createIconFont;

/**
* Creates a view with an Icon and Text in a button style
* @param {Object} args -   list of properties passed to the createIconFont function from the Alloy XML or calling function.
*                          Required parameter(s)
*                          : icon - one of the glyph references from the list above.
                           : text - text of the label (can be null/blank)
*/
exports.createIconButton = (args) => {

  let iconFont = null;
  let textLabel = null;
  let wrapper = Ti.UI.createView(args);

  /**
   * Create Icon and Handler Function
   */
  let _iconStyle = {
    touchEnabled: false,
    font: {
      fontFamily: 'icomoon',
      fontSize: args.font.fontSize
    },
    left: args.icon ? 10 : 0,
    color : args.color,
  };
  iconFont =  Ti.UI.createButton(_iconStyle);
  
  function _setIcon(_i){
    const _icon = _i ? icons[_i] : null;
    iconFont.left = _icon ? 10 : 0;
    iconFont.title = _icon;
  }
  wrapper.setIcon = _setIcon;

  /**
   * Add Icon to Wrapper and Update Icon
   */
  wrapper.add(iconFont);
  wrapper.setIcon(args.icon);

  /**
   * Create Text Label and Handler Function
   */
  let _textStyle = {
    touchEnabled: false,
    font: {
      fontFamily: args.font.fontFamily,
      fontSize: args.font.fontSize,
      fontWeight: args.font.fontWeight
    },
    textAlign: args.textAlign || 'center',
    color: args.color || 'WHITE',
    right: args.text ? 10 : 0
  }
  textLabel = Ti.UI.createLabel(_textStyle);

  function _setText(_txt) {
    textLabel.right = _txt ? 10 : 0;
    textLabel.text = _txt;
  }
  wrapper.setText = _setText;
  
  /**
   * Add Label to Wrapper and Update Text
   */
  wrapper.add(textLabel);
  wrapper.setText(args.text);

  return wrapper;
};

/**
* Creates an Icon (based on Label)
* @param {Object} args -   list of properties passed to the createIconFont function from the Alloy XML or calling function.
*                          Required parameter(s)
*                          : icon - one of the glyph references from the list above.
*/
exports.createIcon = (args) => {

  var w = Alloy.createWidget('ti.bootstrap', 'icon', args);
  var v = w.getView();

  v.setIcon = function(i){
    w.icon = i;
  }

  v.getIcon = function() {
    return w.icon;
  }

  return v;
};

/**
 * Creates a horizontal gray line with a buffer
 * @param {Object} args 
 */
exports.createHr = (args) => {

  return  Ti.UI.createView({
    classes:'gray-line buffer'
  });

};

/**
 * Creates a badge component.
 * @param {Object} args 
 */
exports.createBadge = (args) => {

  let w = Alloy.createWidget('ti.bootstrap', 'badge', args);
  let v = w.getView();

  v.setTitle = function(t) {
    w.title = t;
  }

  v.setBgColor = function(c) {
    w.backgroundColor = c;
  }

  v.setTitleColor = function(c) {
    w.color = c;
  }

  return v;
}