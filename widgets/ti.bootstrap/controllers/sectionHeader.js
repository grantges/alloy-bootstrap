
console.log($.args);

let title = $.args.title || 'Title';
let linkTitle = $.args.linkTitle || 'Link';
let linkCallback = $.args.linkCallback || null;


/** Public Methods */

$.setTitle = (t) => {
    title = t;
    $.title.text = title;
}

$.setLink = (title, callback) => {
    if(title) {
        $.link.title = title;
    }

    if(callback) {
        linkCallback = callback;
    }
}

/** Private Methods */
const _init = ()=> {
    $.setTitle(title);
    $.setLink(linkTitle, linkCallback);
};

/** Register Event Handlers */
$.link.addEventListener('click', (e) => {
    linkCallback && linkCallback(e);
});

/**
 * Initialize the widget
 */
_init();