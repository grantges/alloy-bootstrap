/**
 * JS Libs
 */
var moment = require('alloy/moment');

var _json,
		_data;

/**
 * Initialization function for timeline widget
 * @constructor
 */
(function _constructor(options){

	_json = options.json;
	_buildTimeLine();

})($.args);


function _buildTimeLine(){
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
		var hv = Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineSection", {text: "Day\n"+i}).getView();
		var section = Ti.UI.createTableViewSection({
			headerView:hv
		});

		section.add(Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineRow", {label: "FILE"}).getView());
		section.add(Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineRow", {label: "TASK"}).getView());
		section.add(Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineRow", {label: "REPLY"}).getView());

		sections.push(section);
	}
	$.tableView.data = sections;
}

/**
 * Adds an item to the timeline
 * @param {Object} _item - an item object consists of properties for TIMESTAMP, a LABEL type, an ICON type
 */
$.addItem = function _addItem(item){
	//TODO Add an item to the data set

	$.tableView.insertRowBefore(0, Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineRow", {label: "FILE"}).getView());
	
};

/**
 * Removes a particular item from the Timeline based on the row index of the item
 * @param {Integer} _index
 */
$.removeItem = function _removeItem(index){
	// TODO remove an item
};

/**
 * Additionally another way to build the timeline is to do a full JSON import
 * @param {Object} _json
 */
$.createFromJSON = function _createFromJSON(json){
	//TODO Import Data into Timeline from JSON Object


};
