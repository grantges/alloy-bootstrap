const icons = require('bootstrap/icons.json');
let _width,
    _valueAlign = null;

Object.defineProperty($, 'width', {
    get: function _getWidth(){
        return _width;
    },
    set: function _setWidth(w){
        _width = w;
        $.wrapper.width = w;
        $.titleContainer.width = w;
        $.valueContainer.width = w;
    }
})

/**
 * Icon Properties
 */
Object.defineProperty($, 'icon', {
    get: function _getIcon() {
        $.indicatorIcon.text
    },
    set: function _setIcon(i) {
        $.indicatorIcon.text = icons[i]
    }
});

Object.defineProperty($, 'iconColor', {
    get: function _getIcon() {
        $.indicatorIcon.color
    },
    set: function _setIcon(c) {
        $.indicatorIcon.color = c;
    }
});

Object.defineProperty($, 'iconSize', {
    get: function _getIcon() {
        $.indicatorIcon.font.fontSize
    },
    set: function _setIcon(size) {
        let style = $.createStyle({
            classes: 'icon',
            font: {
                fontSize: size
            }
        });
        $.indicatorIcon.applyProperties(style);
    }
});


/**
 * Title Properties
 */
Object.defineProperty($, 'title', {
    get: function _getIcon() {
        $.indicatorTitle.text
    },
    set: function _setIcon(title) {
        $.indicatorTitle.text = title;
    }
});

Object.defineProperty($, 'titleColor', {
    get: function _getIcon() {
        $.indicatorTitle.color
    },
    set: function _setIcon(c) {
        $.indicatorTitle.color = c;
    }
});

Object.defineProperty($, 'titleAlign', {
    get: function _getTitleAlign() {
        return this._titleAlign
    },
    set: function _setTitleAlign(align) {
        switch(align){
            case 'center':
                $.titleContainer.right = null;
                $.titleContainer.left = null;
                break;

            case 'left': 
                $.titleContainer.right = null;
                $.titleContainer.left = 0;
                break;

            case 'right': 
                $.titleContainer.right = 0;
                $.titleContainer.left = null;
                break;
            default:
        }
    }
})

Object.defineProperty($, 'titleSize', {
    get: function _getValueSize() {
        return $.indicatorTitle.font.fontSize;
    },
    set: function _setValueSize(s) {
        let size = $.createStyle({
            font:{
                fontSize: s
            }
        });
        
        $.indicatorTitle.applyProperties(size);
    }
})


/**
 * Value properties
 */
Object.defineProperty($, 'value', {
    get: function _getValue() {
        $.indicatorValue.text
    },
    set: function _setValue(text) {
        $.indicatorValue.text = text;
    }
});

Object.defineProperty($, 'valueColor', {
    get: function _getValueColor() {
        $.indicatorValue.color
    },
    set: function _setValueColor(c) {
        $.indicatorValue.color = c;
    }
});

Object.defineProperty($, 'valueSize', {
    get: function _getValueSize() {
        return $.indicatorValue.font.fontSize;
    },
    set: function _setValueSize(s) {
        let size = $.createStyle({
            font:{
                fontSize: s
            }
        });
        
        $.indicatorValue.applyProperties(size);
    }
});

Object.defineProperty($, 'valueAlign', {
    get: function _getValueAlign() {
        return _valueAlign;
    },
    set: function _setValueAlign(align) {

        _valueAlign = align;
        switch(align){
            case 'center':
                $.valueContainer.right = null;
                $.valueContainer.left = null;
                $.indicatorValue.textAlign = 'center';
                break;

            case 'left': 
                $.valueContainer.right = null;
                $.valueContainer.left = 0;
                $.indicatorValue.textAlign = 'left';
                break;

            case 'right': 
                $.valueContainer.right = 0;
                $.valueContainer.left = null;
                $.indicatorValue.textAlign = 'right';
                break;
            default:
        }
    }
});


/**
 * Measurement Properties
 */
Object.defineProperty($, 'uom', {
    get: function _getUOM() {
        $.indicatorUOM.text
    },
    set: function _setUOM(text) {
        $.indicatorUOM.text = text;
    }
});

Object.defineProperty($, 'uomColor', {
    get: function _getUOMColor() {
        $.indicatorUOM.color
    },
    set: function _setUOMColor(c) {
        $.indicatorUOM.color = c;
    }
});

Object.defineProperty($, 'uomSize', {
    get: function _getUOMSize() {
        $.indicatorUOM.color
    },
    set: function _setUOMSize(s) {
        let size = $.createStyle({
            font:{
                fontSize: s
            }
        });
        $.indicatorUOM.applyProperties(size);
    }
});



(function _constructor(options){

    this._titleAlign = options.titleAlign || 'right';
    $.titleAlign = this._titleAlign;
    $.indicatorUOM.bottom = 6;

    if(options){
        $.icon = options.icon;
        $.iconColor = options.color || options.iconColor;

        $.value = options.value;
        $.valueSize = options.valueSize;
        $.valueColor = options.valueColor;
        
        $.uom = options.uom;
        $.uomSize = options.uomSize;
        $.uomColor = options.uomColor;

        $.title = options.title;
        $.titleSize = options.titleSize;
        $.titleColor = options.titleColor;
    }
    

})($.args);

function _setAllTextColor(color) {
    $.iconColor = $.titleColor = $.valueColor = $.measurementColor = color;
};
$.setAllTextColor = _setAllTextColor;

function _setIconAndTitleColor(color) {
    $.iconColor = $.titleColor = color;
}
$.setIconAndTitleColor = _setIconAndTitleColor;

function _hideType() {
    $.indicatorUOM.visible = false;
    $.indicatorUOM.width = 0;
}
$.hideType = _hideType;

function _showType() {
    $.indicatorUOM.visible = true;
    $.indicatorUOM.width = Ti.UI.SIZE;
}
$.showType = _showType;