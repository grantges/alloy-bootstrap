/**
 *   _   _   _                 _       _                   
 *  | | (_) | |               | |     | |                  
 *  | |_ _  | |__   ___   ___ | |_ ___| |_ _ __ __ _ _ __  
 *  | __| | | '_ \ / _ \ / _ \| __/ __| __| '__/ _` | '_ \ 
 *  | |_| |_| |_) | (_) | (_) | |_\__ \ |_| | | (_| | |_) |
 *   \__|_(_)_.__/ \___/ \___/ \__|___/\__|_|  \__,_| .__/ 
 *                                                  | |    
 *                                                  |_|    
 * 
 * @author          Bert Grantges
 * @date            October 19, 2020
 * @description     A UI component for tags or badges
 * 
 */ 

let _onClickListener = null;

(function _constructor(options){

    $.wrapper.backgroundColor = options.backgroundColor || $.badge.backgroundColor;
    $.badge.color = options.color ||  $.badge.color;
    $.badge.text  = options.title || ''
    _onClickListener = options.onClickListener || null;    

    if(_onClickListener) {
        $.wrapper.addEventlistener('click', _onClickListener);
    }

})($.args);

$.removeClickEventListener = () => {
    if(_onClickListener){
        $.wrapper.removeEventListener('click', _onClickListener);
        _onClickListener = null;    
    }
}


Object.defineProperty($, 'backgroundColor', {
    get: () => $.wrapper.backgroundColor,
    set: (bc) => {
        if(bc) {        
            console.log(bc);    
            $.wrapper.backgroundColor = bc;
        }
        else {
            throw(new Error('ti.Bootstrap::badge - trying to set the background color without a value. You must enter a hex based color.'))
        }
    }
});

Object.defineProperty($, 'color', {
    get: () => $.badge.color,
    set: (c) => {
        if(c) {            
            $.badge.color = c;
        }
        else {
            throw(new Error('ti.Bootstrap::badge - trying to set text color without a value. You must enter a hex based color.'))
        }
    }
});

Object.defineProperty($, 'title', {
    get: () => $.badge.text,
    set: (title) => {
        if(title){
            console.log(title);
            $.badge.text = title;
        }
        else {
            throw(new Error('ti.Bootstrap::badge - trying to set the title without a value. You must enter a title'));
        }
    } 
});

Object.defineProperty($, 'onClickListener', {
    get: () => {
        return _onClickListener;
    },
    set: (callback) => {
        if(typeof(callback) === 'function'){
            _onClickListener = callback;
            $.wrapper.addEventlistener('click', _onClickListener);
        }
        else {
            throw(new Error('ti.bootstrap::badge - attempting to set onClickListener to something that is not a function.'));
        }
    }
});

Object.defineProperty($, 'left', {
    get:() => $.wrapper.left,
    set: (l) => { $.wrapper.left = l }
});

Object.defineProperty($, 'right', {
    get:() => $.wrapper.right,
    set: (r) => { $.wrapper.right = r }
});

Object.defineProperty($, 'top', {
    get:() => $.wrapper.top,
    set: (t) => { $.wrapper.top = t }
});

Object.defineProperty($, 'bottom', {
    get:() => $.wrapper.bottom,
    set: (b) => { $.wrapper.bottom = b }
});

