var _args = arguments[0] || {};

_args.label = _args.label || "COMMENT";

var LABEL = {
	COMMENT: {text:"COMMENT", color: "#9AD97B"},
	FILE: {text:"FILE", color: "#8CD8DD"},
	TASK: {text:"TASK", color: "#F19A92"},
	REPLY:{text:"REPLY", color: "#AFA4DF"},
};

if(_args.label){
	$.label.backgroundColor = LABEL[_args.label].color || "#9AD97B";
	$.label.text = LABEL[_args.label].text || "COMMENT";
}