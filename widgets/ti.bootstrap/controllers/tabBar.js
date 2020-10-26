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
 * @author              Bert Grantges
 * @date.               October 26, 2020
 * @description         
 * 
 */

const TAB_BAR_HEIGHT = 48;

const DEFAULT_TAB_BACKGROUND_COLOR = '#FFFFFF';
const DEFAULT_TAB_ACTIVE_COLOR = '#5FCE82';
const DEFAULT_TAB_TEXT_COLOR = '#407CDE';
const DEFAULT_TAB_INDICATOR_COLOR = '#407CDE';

let _tabs = [];
let _tabGroup = null;
let _tabBackgroundColor = null;
let _tabActiveColor = null;
let _tabTextColor = null;
let _tabIndicatorColor = null;

(function _constructor(options){

    if(options) {

        _tabGroup = options.tabGroup = options.tabGroup || null;

        _tabBackgroundColor = options.tabBackgroundColor || DEFAULT_TAB_BACKGROUND_COLOR;
        _tabActiveColor = options.tabActiveBackgroundColor || DEFAULT_TAB_ACTIVE_COLOR;
        _tabIndicatorColor = options.tabIndicatorColor || DEFAULT_TAB_INDICATOR_COLOR;
        _tabTextColor = options.tabTitleColor || DEFAULT_TAB_TEXT_COLOR;
        
        $.container.backgroundColor = _tabBackgroundColor;

        if(options.tabs) {
            _addTabs(option.tabs);
        }
    }

 })($.args);

function _addTab(tab) {

    if(tab) {

        let view = Ti.UI.createView({
            index: _tabs.length,
            width: Ti.Platform.displayCaps.platformWidth / (_tabs.length || 1),
            height: 45,
            layout: 'vertical'
        });

        if(tab.icon){

            let icon = Alloy.createWidget('ti.bootstrap', 'icon', {
                top: 6,
                icon: tab.icon,
                font: {
                    fontSize: 24
                },
                height: Ti.UI.SIZE,
                width: Ti.UI.SIZE,
                color: _tabTextColor,
                touchEnabled: false
            });
            view.add(icon.getView());
        }
        

        if(tab.title) {
            console.log(tab.title);
            let title = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                title: tab.title,
                font: {
                    fontSize: 10
                },
                color: _tabTextColor,
                touchEnabled: false
            });
            
            view.add(title);
        }

        _tabs.push(view);
        view.addEventListener('click', _setActiveTab);
        $.container.add(view);

    }

    _resetTabs();

}
$.addTab = _addTab;

function _addTabs(tabs) {

    if(tabs && tabs.length){
        console.log('addTabs');
        _.each(tabs, function(t) {
            _addTab(t);
        });
    }

}
$.addTabs = _addTabs;


function _getTab(index) {

     if(_tabs && index) {
        return _tabs[i];
     }

}
$.getTab = _getTab;

function _setActiveTab (event) {
    
    _resetTabs();

    if(event.source.children) {
        console.log("has Children");
        _.each(event.source.children, function(childView) {     
                childView.color = _tabActiveColor;
        });
    }
    
    if(_tabGroup){
        _tabGroup.setActiveTab(event.source.index);
    }
}
$.setActiveTab = _setActiveTab;

function _resetTabs() {

    $.container.backgroundColor = _tabBackgroundColor;
   // $.indicator.backgroundColor = _tabIndicatorColor;

    console.log(Ti.Platform.displayCaps.platformWidth/(_tabs.length));

    _.each(_tabs, function(t) {
        t.width = Ti.Platform.displayCaps.platformWidth/(_tabs.length);

        if(t.children){
            _.each(t.children, function(childView) {     
                childView.color = _tabTextColor;
        });
        }
    });

}

Object.defineProperties($, {

     'tabBackgroundColor':{
        get: function _getTabBackgroundColor(){
            return _tabActiveBackgroundColor;
        },
        set : function _setTabBackgroundColor(c) {
            $.container.backgroundColor = _tabBackgroundColor = c;
        }
     },

     'tabActiveColor':{
        get: function _getTabBackgroundColor(){
            return _tabActiveColor;
        },
        set : function _setTabBackgroundColor(c) {
            _tabBackgroundColor = c;
            _resetTabs();
        }
     },

     'tabTextColor': {
        get: function _getTabIconColor(){
            return _tabTextColor;
        },
        set : function _setTabIconColor(c) {
            _tabTextColor = c;
            _resetTabs();
        }
     },

     'tabIndicatorColor': {
        get: function _getTabIndicatorColor(){
            return _tabIndicatorColor;
        },
        set : function _setTabIndicatorColor(c) {
            _tabIndicatorColor = c;
            _resetTabs();
        }
     }

});

