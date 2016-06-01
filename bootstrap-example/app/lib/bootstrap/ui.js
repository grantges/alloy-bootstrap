

exports.createInput = function _createInput(options){
  if(!options.type){
    throw new Error('Unable to create Boostap Form Input. No type specified.');
    return;
  }
  return Alloy.createWidget('co.grantges.bootstrap', 'input_'+ options.type.toLowerCase(), options);
};
