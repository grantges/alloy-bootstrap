/**
 * JS Libs
 */
var moment = require('alloy/moment');

/**
 * Passed In Arguments
 */
var _args = arguments[0] || {};



var footerView = Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineSection", {fillColor: "#a9a9a9"}).getView();
$.tableView.footerView = footerView;


var sections = [];

var todayHv = Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineSection", {text: "Today", fillColor: "#dcdcdc"}).getView();
var todaySection = Ti.UI.createTableViewSection({
	headerView:todayHv
});
todaySection.add(Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineRow" ).getView());
todaySection.add(Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineRow").getView());
sections.push(todaySection);


for(var i=0;i<=5;i++){
	var hv = Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineSection", {text: "Day+"+i}).getView();
	var section = Ti.UI.createTableViewSection({
		headerView:hv
	});

	section.add(Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineRow", {label: "FILE"}).getView());
	section.add(Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineRow", {label: "TASK"}).getView());
	section.add(Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineRow", {label: "REPLY"}).getView());

	sections.push(section);
}
$.tableView.data = sections;


$.init = function init(_timelineObject){

};

/**
 * Adds an item to the timeline
 * @param {Object} _item - an item object consists of properties for TIMESTAMP, a LABEL type, an ICON type
 */
$.addItem = function addItem(_item){
	//TODO Add an item to the data set

};

/**
 * Removes a particular item from the Timeline based on the row index of the item
 * @param {Integer} _index
 */
$.removeItem = function removeItem(_index){
	// TODO remove an item
};

/**
 * Additionally another way to build the timeline is to do a full JSON import
 * @param {Object} _json
 */
$.createFromJSON = function createFromJSON(_json){

	//TODO Import Data into Timeline from JSON Object
};
