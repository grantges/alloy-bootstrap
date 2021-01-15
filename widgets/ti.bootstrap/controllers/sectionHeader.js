let title = null;
let linkTitle = null;
let linkCallback = null;


/** Private Methods */
(function _constructor(options){

    title = options.title || 'Title';
    linkTitle = options.linkTitle;
    linkCallback = options.linkCallback || null;

    _setTitle(title);
    _setLink(linkTitle, linkCallback);

    /** Register Event Handlers */
    $.link.addEventListener('click', (e) => {
        linkCallback && linkCallback(e);
    });


})($.args);

/** Public Methods */

function _setTitle(t) {
    title = t;
    $.title.text = title;
}
$.setTitle =  _setTitle;

function _setLink(title, callback) {
    
    if(title) {
        $.link.title = title;
    }

    if(callback) {
        linkCallback = callback;
    }
};
$.setLink = _setLink;
