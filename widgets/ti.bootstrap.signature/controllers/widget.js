'use strict';

const SIGNATURE_DIRECTORY = "signatures";
var _filename = null;


(function _constructor(_params){

	$.container.height = _params.height || 250;
	$.container.width = _params.width || '90%';
	$.container.top = _params.top || null;
	$.container.left = _params.left || null;
	$.container.bottom = _params.left || null;
	$.container.right = _params.left || null;

})($.args);


/**
 * Widget Methods
 */

function _clear(){
	_filename = null;
	$.paint.clear();
}
$.clear = _clear;

/**
 * Private
 */
function getSignatureDirectory(){
	var directory = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, SIGNATURE_DIRECTORY);
	if(!directory.exists()){
		directory.createDirectory();
	}

	return directory;
}

/**
 * Widget Properties
 */

/** Size & Position **/
Object.defineProperty($, 'height', {
	get: function _getHeight(){
		return $.container.width;
	},
	set: function _setHeight(val){
		$.container.width = val;
	}
});

Object.defineProperty($, 'width', {
	get: function _getWidth(){
		return $.container.width;
	},
	set: function _setWidth(val){
		$.container.width = val;
	}
});

Object.defineProperty($, 'top', {
	get: function _getTop(){
		return $.container.top;
	},
	set: function _setTop(val){
		$.container.top = val;
	}
});

Object.defineProperty($, 'right', {
	get: function _getRight(){
		return $.container.right;
	},
	set: function _setRight(val){
		$.container.right = val;
	}
});

Object.defineProperty($, 'bottom', {
	get: function _getBottom(){
		return $.container.bottom;
	},
	set: function _setBottom(val){
		$.container.bottom = val;
	}
});

Object.defineProperty($, 'left', {
	get: function _getLeft(){
		return $.container.left;
	},
	set: function _setLeft(val){
		$.container.left = val;
	}
});

/** Colors & Styles **/
Object.defineProperty($, 'lineColor', {
	get: function _getLineColor(){
		return $.line.backgroundColor;
	},
	set: function _setLineColor(val){
		$.line.backgroundColor = val;
	}
});

Object.defineProperty($, 'backgroundColor', {
	get: function _getBackgroundColor(){
		return $.container.backgroundColor;
	},
	set: function _setBackgroundColor(val){
		$.container.backgroundColor = val;
	}
});

Object.defineProperty($, 'strokeWidth', {
	get: function _getStrokeWidth(){
		return $.paint.strokeWidth;
	},
	set: function _setStrokeWidth(val){
		$.paint.strokeWidth = val;
	}
});

Object.defineProperty($, 'strokeColor', {
	get: function _getStrokeColor(){
		return $.paint.strokeColor;
	},
	set: function _setStrokeColor(val){
		$.paint.strokeColor = val;
	}
});

Object.defineProperty($, 'strokeAlpha', {
	get: function _getStrokeAlpha(){
		return $.paint.strokeAlpha;
	},
	set: function _setStrokeAlpha(val){
		$.paint.strokeAlpha = val;
	}
});

/** Customize the UI **/
Object.defineProperty($, 'title', {
	get: function _getLabel(){
		return $.label.text;
	},
	set: function _setLabel(val){
		$.label.text = val;
	}
});

/** Signature **/
Object.defineProperty($, 'image', {
	get: function _getLabel(){
		return $.paint.toImage();
	},
	set: function _getLabel(val){
		$.paint.image = val;
	}
});

Object.defineProperty($, 'file', {
	get: function _getFile(){

		var imgDir = getSignatureDirectory();

		if(!_filename) {
			_filename = Ti.Platform.createUUID() + '.png';
		}
		var imageFile  = Ti.Filesystem.getFile(imgDir.resolve(), _filename);
		if (imageFile.write($.paint.toImage()) === false) {
		    // handle write error
		}

		var result = imageFile.resolve();
		// dispose of file handles
		imageFile = null;
		imgDir = null;

		return result;
	},
	set: function _setFile(path){
		$.paint.image = path;
	}
});
