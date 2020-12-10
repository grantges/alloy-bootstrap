const icons = require('bootstrap/icons.json');

/**
 * Creates an Alloy Bootstrap Input object of specified type ('text', 'signature', 'checkbox')
 * @param {Object} options 
 */
exports.createInput = (options) => {
  if(!options.type){
    throw new Error('Unable to create Boostap Form Input. No type specified.');
    return;
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
* Creates an Icon Button
* @param {Object} args -   list of properties passed to the createIconFont function from the Alloy XML or calling function.
*                          Required parameter(s)
*                          : icon - one of the glyph references from the list above.
*/
exports.createIconButton = (args) => {
  
  const icon = args.icon ? icons[args.icon] : null;

  const wrapper = Ti.UI.createView({
      layout:'horizontal',
      height: Ti.UI.SIZE,
      width: Ti.UI.SIZE,
  });

  const iconFont =  Ti.UI.createButton(args);
  iconFont.font = {fontFamily:'icomoon'}; 
  iconFont.title = icon;
  wrapper.add(iconFont);

  if(args.text) { 
      const textLabel = Ti.UI.createLabel(args);
      textLabel.text = args.text;
      textLabel.left = 10;
      wrapper.add(textLabel);
  }

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