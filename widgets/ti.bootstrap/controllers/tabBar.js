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
 * @description         Custome TabBar for a TabGroup that leverages ti.bootstrap icons instead of images. 
 * @example             
 *                      var myTabBar = Alloy.createWidget('ti.bootstrap', 'tabBar', {tabGroup: SomeTabGroupReference});
 *                      myTabBar.addTabs({
 *                          {
 *                              icon: 'icon-user',
 *                              title: 'My Profile'
 *                          },
 *                          {
 *                              icon: 'icon-group',
 *                              title: 'My Groups'
 *                          },
 *                          {
 *                              icon: 'icon-compass',
 *                              title: 'My Trips'
 *                          },
 *                          {
 *                              icon: 'icon-settings',
 *                              title: 'Settings'
 *                          }
 *                      });
 *                      SomeTabGroupReference.add(myTabBar);
 */

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

/**
 * Widget Constructor function
 * @param {Object} options - Arguments passed into the controller from the calling function
 */
(function _constructor(options){

    if(options) {

        _tabGroup = options.tabGroup = options.tabGroup || null;

        _tabBackgroundColor = options.tabBackgroundColor || DEFAULT_TAB_BACKGROUND_COLOR;
        _tabIndicatorColor = options.tabIndicatorColor || DEFAULT_TAB_INDICATOR_COLOR;
        _tabActiveColor = options.tabActiveColor || DEFAULT_TAB_ACTIVE_COLOR;
        _tabTextColor = options.tabTitleColor || DEFAULT_TAB_TEXT_COLOR;
        
        $.container.backgroundColor = _tabBackgroundColor;

        if(options.tabs) {
            _addTabs(option.tabs);
        }

        if(_tabGroup) {
            _setActiveTab(_tabGroup.activeTab);
        }
    }

 })($.args);

/**
 * Adds a tab to the custom TabBar
 * @param {Object} tab - Object that has an icon and title property
 */
function _addTab(tab) {

    if(tab) { 

        let view = Ti.UI.createView({
            index: _tabs.length,
            width: Ti.Platform.displayCaps.platformWidth / (_tabs.length || 1),
            height: Ti.UI.SIZE,
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
                top: 4,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                text: tab.title,
                font: {
                    fontSize: 10,
                    fontWeight: 'bold'
                },
                color: _tabTextColor,
                touchEnabled: false
            });
            
            view.add(title);
        }

        _tabs.push(view);
        view.addEventListener('click', _onTabClick);
        $.container.add(view);

    }

    _resetTabs();

}
$.addTab = _addTab;

/**
 * Allows the developer to add multiple tabs at once.
 * @param {Object} tabs - An array of multiple tab objects (see addTab for description of tab object)
 */
function _addTabs(tabs) {

    if(tabs && tabs.length){
        _.each(tabs, function(t) {
            _addTab(t);
        });
    }

}
$.addTabs = _addTabs;


/**
 * Returns a reference to the Ti.UI.View at the provided zero based index.
 * @param {Number} index - zero based index of the tabs in the Tab Bar
 */
function _getTab(index) {

     if(_tabs && index) {
        return _tabs[i];
     }

}
$.getTab = _getTab;

/**
 * Handles the click of a tab view
 * @param {Object} event - Standard Click event object for a Ti.Ui.View
 */
function _onTabClick (event) {
    
    _resetTabs();

    if(event.source.children) {
        _.each(event.source.children, function(childView) {     
                childView.color = _tabActiveColor;
        });
    }
    
    if(_tabGroup){
        _tabGroup.activeTab = event.source.index;
    }
}

/**
 * Sets the active tab for the Tab Bar
 * @param {Number} index 
 */
function _setActiveTab(index) {
    
    if(index && _tabs && _tabs.length){
    
        _resetTabs();
        _.each(_tabs[index].children, function(childView) {     
            childView.color = _tabActiveColor;
        });

    }

}
$.setActiveTab = _setActiveTab;

/**
 * Resets all of the tabs to default size / color
 */
function _resetTabs() {

    $.container.backgroundColor = _tabBackgroundColor;

   _.each(_tabs, function(t) {
       
        t.width = Math.floor(Ti.Platform.displayCaps.platformWidth/(_tabs.length));

        if(t.children){
            _.each(t.children, function(childView) {     
                childView.color = _tabTextColor;
        });
        }
    });

}

/** Public Properties of the TabBar Widget */
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
        get: function _getTabActiveColor(){
            return _tabActiveColor;
        },
        set : function _setTabActiveColor(c) {
            _tabActiveColor = c;
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
     },

     'tabGroup' :{
         get: function _getTabGroup() {
             return _tabGroup;
         },
         set: function _setTabGroup(tg) {
             _tabGroup = tg;
         }
     }

});

