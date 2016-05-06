function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "co.grantges.bootstrap.walkthrough/" + s : s.substring(0, index) + "/co.grantges.bootstrap.walkthrough/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0854,
    key: "ScrollableView",
    style: {
        cacheSize: 4,
        height: "70%",
        showPagingControl: true,
        pagingControlColor: "transparent",
        pageIndicatorColor: "#552D8DD6",
        currentPageIndicatorColor: "#2D8DD6"
    }
}, {
    isApi: true,
    priority: 1000.9001,
    key: "Window",
    style: {
        backgroundColor: "#fff"
    }
}, {
    isApi: true,
    priority: 1000.9003,
    key: "Label",
    style: {
        font: {
            fontFamily: "Helvetica Neue"
        }
    }
}, {
    isApi: true,
    priority: 1000.9005,
    key: "TextField",
    style: {
        font: {
            fontFamily: "Helvetica Neue"
        },
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        paddingLeft: 10,
        paddingRight: 10,
        bottom: 5,
        backgroundColor: "#e7e7e7"
    }
}, {
    isApi: true,
    priority: 1000.9005999999999,
    key: "TextArea",
    style: {
        font: {
            fontFamily: "Helvetica Neue"
        }
    }
}, {
    isApi: true,
    priority: 1000.9007,
    key: "ImageView",
    style: {
        preventDefaultImage: true
    }
}, {
    isClass: true,
    priority: 10000.9008,
    key: "menuIcon",
    style: {
        left: 10,
        width: 30,
        height: 54,
        textAlign: "center",
        font: {
            fontFamily: "FontAwesome",
            fontSize: 18
        },
        color: "#fff"
    }
}, {
    isClass: true,
    priority: 10000.900899999999,
    key: "dropDownIcon",
    style: {
        left: 10,
        width: 30,
        height: 54,
        textAlign: "center",
        font: {
            fontFamily: "FontAwesome",
            fontSize: 18
        },
        color: "#fff"
    }
}, {
    isClass: true,
    priority: 10000.901,
    key: "chevronListIcon",
    style: {
        right: 10,
        width: 30,
        height: 54,
        textAlign: "center",
        font: {
            fontFamily: "FontAwesome",
            fontSize: 18
        },
        color: "#ff0000"
    }
}, {
    isClass: true,
    priority: 10000.9011,
    key: "container-fluid",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.9012,
    key: "vgroup",
    style: {
        layout: "vertical"
    }
}, {
    isClass: true,
    priority: 10000.9013,
    key: "hgroup",
    style: {
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.901399999999,
    key: "buffer",
    style: {
        top: 10,
        left: 10,
        right: 10,
        bottom: 10
    }
}, {
    isClass: true,
    priority: 10000.9015,
    key: "top-buffer",
    style: {
        top: 10
    }
}, {
    isClass: true,
    priority: 10000.9016,
    key: "left-buffer",
    style: {
        left: 10
    }
}, {
    isClass: true,
    priority: 10000.9017,
    key: "right-buffer",
    style: {
        right: 10
    }
}, {
    isClass: true,
    priority: 10000.9018,
    key: "bottom-buffer",
    style: {
        bottom: 10
    }
}, {
    isClass: true,
    priority: 10000.901899999999,
    key: "fill",
    style: {
        height: Ti.UI.FILL,
        width: Ti.UI.FILL
    }
}, {
    isClass: true,
    priority: 10000.902,
    key: "span-width",
    style: {
        width: "100%",
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.9021,
    key: "span-height",
    style: {
        height: "100%",
        width: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.9022,
    key: "size",
    style: {
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.9023,
    key: "bottom",
    style: {
        bottom: 0
    }
}, {
    isClass: true,
    priority: 10000.902399999999,
    key: "top",
    style: {
        top: 0
    }
}, {
    isClass: true,
    priority: 10000.9025,
    key: "right",
    style: {
        right: 0
    }
}, {
    isClass: true,
    priority: 10000.9026,
    key: "left",
    style: {
        left: 0
    }
}, {
    isClass: true,
    priority: 10000.902699999999,
    key: "text-center",
    style: {
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    }
}, {
    isClass: true,
    priority: 10000.9028,
    key: "text-right",
    style: {
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT
    }
}, {
    isClass: true,
    priority: 10000.9029,
    key: "text-left",
    style: {
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
    }
}, {
    isClass: true,
    priority: 10000.903,
    key: "row",
    style: {
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.9031,
    key: "col-1",
    style: {
        width: "8.33333333%",
        height: 50,
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.903199999999,
    key: "col-2",
    style: {
        width: "16.66666667%",
        height: Ti.UI.SIZE,
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.9033,
    key: "col-3",
    style: {
        width: "25%",
        height: Ti.UI.SIZE,
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.9034,
    key: "col-4",
    style: {
        width: "33.33333333%",
        height: Ti.UI.SIZE,
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.9035,
    key: "col-5",
    style: {
        width: "41.66666667%",
        height: Ti.UI.SIZE,
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.9036,
    key: "col-6",
    style: {
        width: "50%",
        height: Ti.UI.SIZE,
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.903699999999,
    key: "col-7",
    style: {
        width: "58.33333333%",
        height: Ti.UI.SIZE,
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.9038,
    key: "col-8",
    style: {
        width: "66.66666667%",
        height: Ti.UI.SIZE,
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.9039,
    key: "col-9",
    style: {
        width: "75%",
        height: Ti.UI.SIZE,
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.904,
    key: "col-10",
    style: {
        width: "83.33333333%",
        height: Ti.UI.SIZE,
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.9041,
    key: "col-11",
    style: {
        width: "91.66666667%",
        height: Ti.UI.SIZE,
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.904199999999,
    key: "col-12",
    style: {
        width: "100%",
        height: Ti.UI.SIZE,
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.9043,
    key: "thumbnail",
    style: {
        height: 75,
        width: 75
    }
}, {
    isClass: true,
    priority: 10000.9044,
    key: "square100",
    style: {
        height: 100,
        width: 100
    }
}, {
    isClass: true,
    priority: 10000.904499999999,
    key: "square150",
    style: {
        height: 150,
        width: 150
    }
}, {
    isClass: true,
    priority: 10000.9046,
    key: "square200",
    style: {
        height: 200,
        width: 200
    }
}, {
    isClass: true,
    priority: 10000.9047,
    key: "square250",
    style: {
        height: 250,
        width: 250
    }
}, {
    isClass: true,
    priority: 10000.9048,
    key: "h1",
    style: {
        font: {
            fontSize: 36
        }
    }
}, {
    isClass: true,
    priority: 10000.9049,
    key: "h2",
    style: {
        font: {
            fontSize: 30
        }
    }
}, {
    isClass: true,
    priority: 10000.904999999999,
    key: "h3",
    style: {
        font: {
            fontSize: 24
        }
    }
}, {
    isClass: true,
    priority: 10000.9051,
    key: "h4",
    style: {
        font: {
            fontSize: 18
        }
    }
}, {
    isClass: true,
    priority: 10000.9052,
    key: "h5",
    style: {
        font: {
            fontSize: 14
        }
    }
}, {
    isClass: true,
    priority: 10000.9053,
    key: "h6",
    style: {
        font: {
            fontSize: 12
        }
    }
}, {
    isClass: true,
    priority: 10000.9054,
    key: "normal-text",
    style: {
        font: {
            fontSize: 14
        }
    }
}, {
    isClass: true,
    priority: 10000.905499999999,
    key: "small-text",
    style: {
        font: {
            fontSize: 10
        }
    }
}, {
    isClass: true,
    priority: 10000.9056,
    key: "large-text",
    style: {
        font: {
            fontSize: 18
        }
    }
}, {
    isClass: true,
    priority: 10000.9057,
    key: "bold",
    style: {
        font: {
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.9058,
    key: "italic",
    style: {
        font: {
            fontStyle: "italic"
        }
    }
}, {
    isClass: true,
    priority: 10000.9059,
    key: "underline",
    style: {
        font: {
            fontStyle: "underline"
        }
    }
}, {
    isClass: true,
    priority: 10000.905999999999,
    key: "hide",
    style: {
        visible: false
    }
}, {
    isClass: true,
    priority: 10000.9061,
    key: "transparent",
    style: {
        opacity: .25
    }
}, {
    isClass: true,
    priority: 10000.9062,
    key: "primary",
    style: {
        color: "#2D8DD6"
    }
}, {
    isClass: true,
    priority: 10000.906299999999,
    key: "success",
    style: {
        color: "#468847",
        backgroundColor: "#dff0d8",
        borderColor: "#d6e9c6",
        border: 1
    }
}, {
    isClass: true,
    priority: 10000.9064,
    key: "warn",
    style: {}
}, {
    isClass: true,
    priority: 10000.9065,
    key: "error",
    style: {
        color: "#b94a48",
        backgroundColor: "#f2dede",
        borderColor: "#eed3d7",
        border: 1
    }
}, {
    isClass: true,
    priority: 10000.9066,
    key: "muted",
    style: {
        color: "#ececec"
    }
}, {
    isClass: true,
    priority: 10000.9067,
    key: "white",
    style: {
        color: "#fff"
    }
}, {
    isClass: true,
    priority: 10000.906799999999,
    key: "light-gray",
    style: {
        color: "#646E7E"
    }
}, {
    isClass: true,
    priority: 10000.9069,
    key: "dark-gray",
    style: {
        color: "#969696"
    }
}, {
    isClass: true,
    priority: 10000.907,
    key: "black",
    style: {
        color: "#201C1D"
    }
}, {
    isClass: true,
    priority: 10000.9071,
    key: "btn",
    style: {
        borderRadius: 4,
        textAlign: "center",
        height: 45
    }
}, {
    isClass: true,
    priority: 10000.9072,
    key: "btn-icon",
    style: {
        font: {
            fontSize: 36
        },
        height: 50,
        width: 50,
        textAlign: "center",
        borderRadius: 25
    }
}, {
    isClass: true,
    priority: 10000.907299999999,
    key: "btn-default",
    style: {
        backgroundColor: "#ececec",
        color: "#969696"
    }
}, {
    isClass: true,
    priority: 10000.9074,
    key: "btn-primary",
    style: {
        backgroundColor: "#2D8DD6",
        color: "#fff"
    }
}, {
    isClass: true,
    priority: 10000.9075,
    key: "btn-success",
    style: {
        backgroundColor: "#29C566",
        color: "#fff"
    }
}, {
    isClass: true,
    priority: 10000.9076,
    key: "btn-warn",
    style: {
        backgroundColor: "#EFBC12",
        color: "#fff"
    }
}, {
    isClass: true,
    priority: 10000.9077,
    key: "btn-error",
    style: {
        backgroundColor: "#CB564D",
        color: "#fff"
    }
}, {
    isClass: true,
    priority: 10000.907799999999,
    key: "info",
    style: {
        color: "#3a87ad",
        backgroundColor: "#d9edf7",
        borderColor: "#bce8f1",
        border: 1
    }
}, {
    isClass: true,
    priority: 10000.9079,
    key: "border-dark",
    style: {
        border: 6,
        borderColor: "#666"
    }
}, {
    isClass: true,
    priority: 10000.908,
    key: "border-dark-thin",
    style: {
        border: 2,
        borderColor: "#666"
    }
}, {
    isClass: true,
    priority: 10000.908099999999,
    key: "border-dark-thick",
    style: {
        border: 10,
        borderColor: "#666"
    }
}, {
    isClass: true,
    priority: 10000.9082,
    key: "border-light",
    style: {
        border: 6,
        borderColor: "#ececec"
    }
}, {
    isClass: true,
    priority: 10000.9083,
    key: "border-light-thin",
    style: {
        border: 2,
        borderColor: "#ececec"
    }
}, {
    isClass: true,
    priority: 10000.9084,
    key: "border-light-thick",
    style: {
        border: 10,
        borderColor: "#ececec"
    }
}, {
    isClass: true,
    priority: 10000.9085,
    key: "black-line",
    style: {
        backgroundColor: "#000",
        width: Ti.UI.FILL,
        height: 1
    }
}, {
    isClass: true,
    priority: 10000.908599999999,
    key: "gray-line",
    style: {
        backgroundColor: "#9b9d9f",
        width: Ti.UI.FILL,
        height: 1
    }
}, {
    isClass: true,
    priority: 10000.9087,
    key: "white-line",
    style: {
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 1
    }
}, {
    isClass: true,
    priority: 10000.9088,
    key: "icon",
    style: {
        font: {
            fontFamily: "icomoon"
        }
    }
}, {
    isClass: true,
    priority: 10000.9089,
    key: "icon-sunrise",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.909,
    key: "icon-sun",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.909099999999,
    key: "icon-moon",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9092,
    key: "icon-sun2",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9093,
    key: "icon-windy",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9094,
    key: "icon-wind",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9095,
    key: "icon-snowflake",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.909599999999,
    key: "icon-cloudy",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9097,
    key: "icon-cloud2",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9098,
    key: "icon-weather",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.909899999999,
    key: "icon-weather2",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.91,
    key: "icon-weather3",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9101,
    key: "icon-lines",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9102,
    key: "icon-cloud3",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9103,
    key: "icon-lightning",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.910399999999,
    key: "icon-lightning2",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9105,
    key: "icon-rainy",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9106,
    key: "icon-rainy2",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9107,
    key: "icon-windy2",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9108,
    key: "icon-windy3",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.910899999999,
    key: "icon-snowy",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.911,
    key: "icon-snowy2",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9111,
    key: "icon-snowy3",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9112,
    key: "icon-weather4",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9113,
    key: "icon-cloudy2",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.911399999999,
    key: "icon-cloud4",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9115,
    key: "icon-lightning3",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9116,
    key: "icon-sun3",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.911699999999,
    key: "icon-moon2",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9118,
    key: "icon-cloudy3",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9119,
    key: "icon-cloud5",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.912,
    key: "icon-cloud6",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9121,
    key: "icon-lightning4",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.912199999999,
    key: "icon-rainy3",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9123,
    key: "icon-rainy4",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9124,
    key: "icon-windy4",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9125,
    key: "icon-windy5",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9126,
    key: "icon-snowy4",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.912699999999,
    key: "icon-snowy5",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9128,
    key: "icon-weather5",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9129,
    key: "icon-cloudy4",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.913,
    key: "icon-lightning5",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9131,
    key: "icon-thermometer",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.913199999999,
    key: "icon-compass2",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9133,
    key: "icon-none",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9134,
    key: "icon-Celsius",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.913499999999,
    key: "icon-Fahrenheit",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9136,
    key: "icon-glass",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9137,
    key: "icon-music",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9138,
    key: "icon-search",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9139,
    key: "icon-envelope-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.913999999999,
    key: "icon-heart",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9141,
    key: "icon-star",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9142,
    key: "icon-star-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9143,
    key: "icon-user",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9144,
    key: "icon-film",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.914499999999,
    key: "icon-th-large",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9146,
    key: "icon-th",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9147,
    key: "icon-th-list",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9148,
    key: "icon-check",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9149,
    key: "icon-close",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.914999999999,
    key: "icon-remove",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9151,
    key: "icon-times",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9152,
    key: "icon-search-plus",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.915299999999,
    key: "icon-search-minus",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9154,
    key: "icon-power-off",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9155,
    key: "icon-signal",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9156,
    key: "icon-cog",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9157,
    key: "icon-gear",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.915799999999,
    key: "icon-trash-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9159,
    key: "icon-home",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.916,
    key: "icon-file-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9161,
    key: "icon-clock-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9162,
    key: "icon-road",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.916299999999,
    key: "icon-download",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9164,
    key: "icon-arrow-circle-o-down",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9165,
    key: "icon-arrow-circle-o-up",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9166,
    key: "icon-inbox",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9167,
    key: "icon-play-circle-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.916799999999,
    key: "icon-repeat",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9169,
    key: "icon-rotate-right",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.917,
    key: "icon-refresh",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.917099999999,
    key: "icon-list-alt",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9172,
    key: "icon-lock",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9173,
    key: "icon-flag",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9174,
    key: "icon-headphones",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9175,
    key: "icon-volume-off",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.917599999999,
    key: "icon-volume-down",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9177,
    key: "icon-volume-up",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9178,
    key: "icon-qrcode",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9179,
    key: "icon-barcode",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.918,
    key: "icon-tag",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.918099999999,
    key: "icon-tags",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9182,
    key: "icon-book",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9183,
    key: "icon-bookmark",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9184,
    key: "icon-print",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9185,
    key: "icon-camera",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.918599999999,
    key: "icon-font",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9187,
    key: "icon-bold",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9188,
    key: "icon-italic",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.918899999999,
    key: "icon-text-height",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.919,
    key: "icon-text-width",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9191,
    key: "icon-align-left",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9192,
    key: "icon-align-center",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9193,
    key: "icon-align-right",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.919399999999,
    key: "icon-align-justify",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9195,
    key: "icon-list",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9196,
    key: "icon-dedent",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9197,
    key: "icon-outdent",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9198,
    key: "icon-indent",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.919899999999,
    key: "icon-video-camera",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.92,
    key: "icon-image",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9201,
    key: "icon-photo",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9202,
    key: "icon-picture-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9203,
    key: "icon-pencil",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.920399999999,
    key: "icon-map-marker",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9205,
    key: "icon-adjust",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9206,
    key: "icon-tint",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.920699999999,
    key: "icon-edit",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9208,
    key: "icon-pencil-square-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9209,
    key: "icon-share-square-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.921,
    key: "icon-check-square-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9211,
    key: "icon-arrows",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.921199999999,
    key: "icon-step-backward",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9213,
    key: "icon-fast-backward",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9214,
    key: "icon-backward",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9215,
    key: "icon-play",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9216,
    key: "icon-pause",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.921699999999,
    key: "icon-stop",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9218,
    key: "icon-forward",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9219,
    key: "icon-fast-forward",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.922,
    key: "icon-step-forward",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9221,
    key: "icon-eject",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.922199999999,
    key: "icon-chevron-left",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9223,
    key: "icon-chevron-right",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9224,
    key: "icon-plus-circle",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.922499999999,
    key: "icon-minus-circle",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9226,
    key: "icon-times-circle",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9227,
    key: "icon-check-circle",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9228,
    key: "icon-question-circle",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9229,
    key: "icon-info-circle",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.922999999999,
    key: "icon-crosshairs",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9231,
    key: "icon-times-circle-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9232,
    key: "icon-check-circle-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9233,
    key: "icon-ban",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9234,
    key: "icon-arrow-left",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.923499999999,
    key: "icon-arrow-right",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9236,
    key: "icon-arrow-up",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9237,
    key: "icon-arrow-down",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9238,
    key: "icon-mail-forward",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9239,
    key: "icon-share",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.923999999999,
    key: "icon-expand",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9241,
    key: "icon-compress",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9242,
    key: "icon-plus",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.924299999999,
    key: "icon-minus",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9244,
    key: "icon-asterisk",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9245,
    key: "icon-exclamation-circle",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9246,
    key: "icon-gift",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9247,
    key: "icon-leaf",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.924799999999,
    key: "icon-fire",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9249,
    key: "icon-eye",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.925,
    key: "icon-eye-slash",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9251,
    key: "icon-exclamation-triangle",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9252,
    key: "icon-warning",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.925299999999,
    key: "icon-plane",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9254,
    key: "icon-calendar",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9255,
    key: "icon-random",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9256,
    key: "icon-comment",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9257,
    key: "icon-magnet",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.925799999999,
    key: "icon-chevron-up",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9259,
    key: "icon-chevron-down",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.926,
    key: "icon-retweet",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.926099999999,
    key: "icon-shopping-cart",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9262,
    key: "icon-folder",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9263,
    key: "icon-folder-open",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9264,
    key: "icon-arrows-v",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9265,
    key: "icon-arrows-h",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.926599999999,
    key: "icon-bar-chart",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9267,
    key: "icon-bar-chart-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9268,
    key: "icon-twitter-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9269,
    key: "icon-facebook-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.927,
    key: "icon-camera-retro",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.927099999999,
    key: "icon-key",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9272,
    key: "icon-cogs",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9273,
    key: "icon-gears",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9274,
    key: "icon-comments",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9275,
    key: "icon-thumbs-o-up",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.927599999999,
    key: "icon-thumbs-o-down",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9277,
    key: "icon-star-half",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9278,
    key: "icon-heart-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.927899999999,
    key: "icon-sign-out",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.928,
    key: "icon-linkedin-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9281,
    key: "icon-thumb-tack",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9282,
    key: "icon-external-link",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9283,
    key: "icon-sign-in",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.928399999999,
    key: "icon-trophy",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9285,
    key: "icon-github-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9286,
    key: "icon-upload",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9287,
    key: "icon-lemon-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9288,
    key: "icon-phone",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.928899999999,
    key: "icon-square-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.929,
    key: "icon-bookmark-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9291,
    key: "icon-phone-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9292,
    key: "icon-twitter",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9293,
    key: "icon-facebook",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.929399999999,
    key: "icon-facebook-f",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9295,
    key: "icon-github",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9296,
    key: "icon-unlock",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.929699999999,
    key: "icon-credit-card",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9298,
    key: "icon-feed",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9299,
    key: "icon-rss",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.93,
    key: "icon-hdd-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9301,
    key: "icon-bullhorn",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.930199999999,
    key: "icon-bell-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9303,
    key: "icon-certificate",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9304,
    key: "icon-hand-o-right",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9305,
    key: "icon-hand-o-left",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9306,
    key: "icon-hand-o-up",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.930699999999,
    key: "icon-hand-o-down",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9308,
    key: "icon-arrow-circle-left",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9309,
    key: "icon-arrow-circle-right",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.931,
    key: "icon-arrow-circle-up",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9311,
    key: "icon-arrow-circle-down",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.931199999999,
    key: "icon-globe",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9313,
    key: "icon-wrench",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9314,
    key: "icon-tasks",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.931499999999,
    key: "icon-filter",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9316,
    key: "icon-briefcase",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9317,
    key: "icon-arrows-alt",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9318,
    key: "icon-group",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9319,
    key: "icon-users",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.931999999999,
    key: "icon-chain",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9321,
    key: "icon-link",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9322,
    key: "icon-cloud",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9323,
    key: "icon-flask",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9324,
    key: "icon-cut",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.932499999999,
    key: "icon-scissors",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9326,
    key: "icon-copy",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9327,
    key: "icon-files-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9328,
    key: "icon-paperclip",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9329,
    key: "icon-floppy-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.932999999999,
    key: "icon-save",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9331,
    key: "icon-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9332,
    key: "icon-bars",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.933299999999,
    key: "icon-navicon",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9334,
    key: "icon-reorder",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9335,
    key: "icon-list-ul",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9336,
    key: "icon-list-ol",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9337,
    key: "icon-strikethrough",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.933799999999,
    key: "icon-underline",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9339,
    key: "icon-table",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.934,
    key: "icon-magic",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9341,
    key: "icon-truck",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9342,
    key: "icon-pinterest",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.934299999999,
    key: "icon-pinterest-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9344,
    key: "icon-google-plus-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9345,
    key: "icon-google-plus",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9346,
    key: "icon-money",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9347,
    key: "icon-caret-down",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.934799999999,
    key: "icon-caret-up",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9349,
    key: "icon-caret-left",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.935,
    key: "icon-caret-right",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.935099999999,
    key: "icon-columns",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9352,
    key: "icon-sort",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9353,
    key: "icon-unsorted",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9354,
    key: "icon-sort-desc",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9355,
    key: "icon-sort-down",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.935599999999,
    key: "icon-sort-asc",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9357,
    key: "icon-sort-up",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9358,
    key: "icon-envelope",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9359,
    key: "icon-linkedin",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.936,
    key: "icon-rotate-left",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.936099999999,
    key: "icon-undo",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9362,
    key: "icon-gavel",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9363,
    key: "icon-legal",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9364,
    key: "icon-dashboard",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9365,
    key: "icon-tachometer",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.936599999999,
    key: "icon-comment-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9367,
    key: "icon-comments-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9368,
    key: "icon-bolt",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.936899999999,
    key: "icon-flash",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.937,
    key: "icon-sitemap",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9371,
    key: "icon-umbrella",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9372,
    key: "icon-clipboard",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9373,
    key: "icon-paste",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.937399999999,
    key: "icon-lightbulb-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9375,
    key: "icon-exchange",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9376,
    key: "icon-cloud-download",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9377,
    key: "icon-cloud-upload",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9378,
    key: "icon-user-md",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.937899999999,
    key: "icon-stethoscope",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.938,
    key: "icon-suitcase",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9381,
    key: "icon-bell",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9382,
    key: "icon-coffee",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9383,
    key: "icon-cutlery",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9384,
    key: "icon-file-text-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9385,
    key: "icon-building-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9386,
    key: "icon-hospital-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.938699999999,
    key: "icon-ambulance",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9388,
    key: "icon-medkit",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9389,
    key: "icon-fighter-jet",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.939,
    key: "icon-beer",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9391,
    key: "icon-h-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.939199999999,
    key: "icon-plus-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9393,
    key: "icon-angle-double-left",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9394,
    key: "icon-angle-double-right",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9395,
    key: "icon-angle-double-up",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9396,
    key: "icon-angle-double-down",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.939699999999,
    key: "icon-angle-left",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9398,
    key: "icon-angle-right",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9399,
    key: "icon-angle-up",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.94,
    key: "icon-angle-down",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9401,
    key: "icon-desktop",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9402,
    key: "icon-laptop",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9403,
    key: "icon-tablet",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9404,
    key: "icon-mobile",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.940499999999,
    key: "icon-mobile-phone",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9406,
    key: "icon-circle-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9407,
    key: "icon-quote-left",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9408,
    key: "icon-quote-right",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9409,
    key: "icon-spinner",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.940999999999,
    key: "icon-circle",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9411,
    key: "icon-mail-reply",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9412,
    key: "icon-reply",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9413,
    key: "icon-github-alt",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9414,
    key: "icon-folder-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.941499999999,
    key: "icon-folder-open-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9416,
    key: "icon-smile-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9417,
    key: "icon-frown-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9418,
    key: "icon-meh-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9419,
    key: "icon-gamepad",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.942,
    key: "icon-keyboard-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9421,
    key: "icon-flag-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9422,
    key: "icon-flag-checkered",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.942299999999,
    key: "icon-terminal",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9424,
    key: "icon-code",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9425,
    key: "icon-mail-reply-all",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9426,
    key: "icon-reply-all",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9427,
    key: "icon-star-half-empty",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.942799999999,
    key: "icon-star-half-full",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9429,
    key: "icon-star-half-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.943,
    key: "icon-location-arrow",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9431,
    key: "icon-crop",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9432,
    key: "icon-code-fork",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.943299999999,
    key: "icon-chain-broken",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9434,
    key: "icon-unlink",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9435,
    key: "icon-question",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9436,
    key: "icon-info",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9437,
    key: "icon-exclamation",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9438,
    key: "icon-superscript",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9439,
    key: "icon-subscript",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.944,
    key: "icon-eraser",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.944099999999,
    key: "icon-puzzle-piece",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9442,
    key: "icon-microphone",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9443,
    key: "icon-microphone-slash",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9444,
    key: "icon-shield",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9445,
    key: "icon-calendar-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.944599999999,
    key: "icon-fire-extinguisher",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9447,
    key: "icon-rocket",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9448,
    key: "icon-maxcdn",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9449,
    key: "icon-chevron-circle-left",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.945,
    key: "icon-chevron-circle-right",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.945099999999,
    key: "icon-chevron-circle-up",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9452,
    key: "icon-chevron-circle-down",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9453,
    key: "icon-html5",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9454,
    key: "icon-css3",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9455,
    key: "icon-anchor",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9456,
    key: "icon-unlock-alt",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9457,
    key: "icon-bullseye",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9458,
    key: "icon-ellipsis-h",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.945899999999,
    key: "icon-ellipsis-v",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.946,
    key: "icon-rss-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9461,
    key: "icon-play-circle",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9462,
    key: "icon-ticket",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9463,
    key: "icon-minus-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.946399999999,
    key: "icon-minus-square-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9465,
    key: "icon-level-up",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9466,
    key: "icon-level-down",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9467,
    key: "icon-check-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9468,
    key: "icon-pencil-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.946899999999,
    key: "icon-external-link-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.947,
    key: "icon-share-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9471,
    key: "icon-compass",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9472,
    key: "icon-caret-square-o-down",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9473,
    key: "icon-toggle-down",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9474,
    key: "icon-caret-square-o-up",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9475,
    key: "icon-toggle-up",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9476,
    key: "icon-caret-square-o-right",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.947699999999,
    key: "icon-toggle-right",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9478,
    key: "icon-eur",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9479,
    key: "icon-euro",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.948,
    key: "icon-gbp",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9481,
    key: "icon-dollar",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.948199999999,
    key: "icon-usd",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9483,
    key: "icon-inr",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9484,
    key: "icon-rupee",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9485,
    key: "icon-cny",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9486,
    key: "icon-jpy",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.948699999999,
    key: "icon-rmb",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9488,
    key: "icon-yen",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9489,
    key: "icon-rouble",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.949,
    key: "icon-rub",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9491,
    key: "icon-ruble",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9492,
    key: "icon-krw",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9493,
    key: "icon-won",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9494,
    key: "icon-bitcoin",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.949499999999,
    key: "icon-btc",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9496,
    key: "icon-file",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9497,
    key: "icon-file-text",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9498,
    key: "icon-sort-alpha-asc",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9499,
    key: "icon-sort-alpha-desc",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.949999999999,
    key: "icon-sort-amount-asc",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9501,
    key: "icon-sort-amount-desc",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9502,
    key: "icon-sort-numeric-asc",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9503,
    key: "icon-sort-numeric-desc",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9504,
    key: "icon-thumbs-up",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.950499999999,
    key: "icon-thumbs-down",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9506,
    key: "icon-youtube-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9507,
    key: "icon-youtube",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9508,
    key: "icon-xing",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9509,
    key: "icon-xing-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.951,
    key: "icon-youtube-play",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9511,
    key: "icon-dropbox",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9512,
    key: "icon-stack-overflow",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.951299999999,
    key: "icon-instagram",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9514,
    key: "icon-flickr",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9515,
    key: "icon-adn",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9516,
    key: "icon-bitbucket",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9517,
    key: "icon-bitbucket-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.951799999999,
    key: "icon-tumblr",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9519,
    key: "icon-tumblr-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.952,
    key: "icon-long-arrow-down",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9521,
    key: "icon-long-arrow-up",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9522,
    key: "icon-long-arrow-left",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.952299999999,
    key: "icon-long-arrow-right",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9524,
    key: "icon-apple",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9525,
    key: "icon-windows",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9526,
    key: "icon-android",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9527,
    key: "icon-linux",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9528,
    key: "icon-dribbble",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9529,
    key: "icon-skype",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.953,
    key: "icon-foursquare",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.953099999999,
    key: "icon-trello",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9532,
    key: "icon-female",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9533,
    key: "icon-male",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9534,
    key: "icon-gittip",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9535,
    key: "icon-gratipay",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.953599999999,
    key: "icon-sun-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9537,
    key: "icon-moon-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9538,
    key: "icon-archive",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9539,
    key: "icon-bug",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.954,
    key: "icon-vk",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.954099999999,
    key: "icon-weibo",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9542,
    key: "icon-renren",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9543,
    key: "icon-pagelines",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9544,
    key: "icon-stack-exchange",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9545,
    key: "icon-arrow-circle-o-right",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9546,
    key: "icon-arrow-circle-o-left",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9547,
    key: "icon-caret-square-o-left",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9548,
    key: "icon-toggle-left",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.954899999999,
    key: "icon-dot-circle-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.955,
    key: "icon-wheelchair",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9551,
    key: "icon-vimeo-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9552,
    key: "icon-try",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9553,
    key: "icon-turkish-lira",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.955399999999,
    key: "icon-plus-square-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9555,
    key: "icon-space-shuttle",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9556,
    key: "icon-slack",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9557,
    key: "icon-envelope-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9558,
    key: "icon-wordpress",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.955899999999,
    key: "icon-openid",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.956,
    key: "icon-bank",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9561,
    key: "icon-institution",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9562,
    key: "icon-university",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9563,
    key: "icon-graduation-cap",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9564,
    key: "icon-mortar-board",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9565,
    key: "icon-yahoo",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9566,
    key: "icon-google",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.956699999999,
    key: "icon-reddit",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9568,
    key: "icon-reddit-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9569,
    key: "icon-stumbleupon-circle",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.957,
    key: "icon-stumbleupon",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9571,
    key: "icon-delicious",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.957199999999,
    key: "icon-digg",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9573,
    key: "icon-pied-piper",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9574,
    key: "icon-pied-piper-alt",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9575,
    key: "icon-drupal",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9576,
    key: "icon-joomla",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.957699999999,
    key: "icon-language",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9578,
    key: "icon-fax",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9579,
    key: "icon-building",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.958,
    key: "icon-child",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9581,
    key: "icon-paw",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9582,
    key: "icon-spoon",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9583,
    key: "icon-cube",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9584,
    key: "icon-cubes",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.958499999999,
    key: "icon-behance",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9586,
    key: "icon-behance-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9587,
    key: "icon-steam",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9588,
    key: "icon-steam-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9589,
    key: "icon-recycle",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.958999999999,
    key: "icon-automobile",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9591,
    key: "icon-car",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9592,
    key: "icon-cab",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9593,
    key: "icon-taxi",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9594,
    key: "icon-tree",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.959499999999,
    key: "icon-spotify",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9596,
    key: "icon-deviantart",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9597,
    key: "icon-soundcloud",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9598,
    key: "icon-database",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9599,
    key: "icon-file-pdf-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.96,
    key: "icon-file-word-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9601,
    key: "icon-file-excel-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9602,
    key: "icon-file-powerpoint-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.960299999999,
    key: "icon-file-image-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9604,
    key: "icon-file-photo-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9605,
    key: "icon-file-picture-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9606,
    key: "icon-file-archive-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9607,
    key: "icon-file-zip-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.960799999999,
    key: "icon-file-audio-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9609,
    key: "icon-file-sound-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.961,
    key: "icon-file-movie-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9611,
    key: "icon-file-video-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9612,
    key: "icon-file-code-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.961299999999,
    key: "icon-vine",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9614,
    key: "icon-codepen",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9615,
    key: "icon-jsfiddle",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9616,
    key: "icon-life-bouy",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9617,
    key: "icon-life-buoy",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9618,
    key: "icon-life-ring",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9619,
    key: "icon-life-saver",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.962,
    key: "icon-support",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.962099999999,
    key: "icon-circle-o-notch",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9622,
    key: "icon-ra",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9623,
    key: "icon-rebel",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9624,
    key: "icon-empire",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9625,
    key: "icon-ge",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.962599999999,
    key: "icon-git-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9627,
    key: "icon-git",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9628,
    key: "icon-hacker-news",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9629,
    key: "icon-y-combinator-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.963,
    key: "icon-yc-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.963099999999,
    key: "icon-tencent-weibo",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9632,
    key: "icon-qq",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9633,
    key: "icon-wechat",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.963399999999,
    key: "icon-weixin",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9635,
    key: "icon-paper-plane",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9636,
    key: "icon-send",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9637,
    key: "icon-paper-plane-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9638,
    key: "icon-send-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.963899999999,
    key: "icon-history",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.964,
    key: "icon-circle-thin",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9641,
    key: "icon-header",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9642,
    key: "icon-paragraph",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9643,
    key: "icon-sliders",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.964399999999,
    key: "icon-share-alt",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9645,
    key: "icon-share-alt-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9646,
    key: "icon-bomb",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9647,
    key: "icon-futbol-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9648,
    key: "icon-soccer-ball-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.964899999999,
    key: "icon-tty",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.965,
    key: "icon-binoculars",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9651,
    key: "icon-plug",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.965199999999,
    key: "icon-slideshare",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9653,
    key: "icon-twitch",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9654,
    key: "icon-yelp",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9655,
    key: "icon-newspaper-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9656,
    key: "icon-wifi",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.965699999999,
    key: "icon-calculator",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9658,
    key: "icon-paypal",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9659,
    key: "icon-google-wallet",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.966,
    key: "icon-cc-visa",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9661,
    key: "icon-cc-mastercard",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.966199999999,
    key: "icon-cc-discover",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9663,
    key: "icon-cc-amex",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9664,
    key: "icon-cc-paypal",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9665,
    key: "icon-cc-stripe",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9666,
    key: "icon-bell-slash",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.966699999999,
    key: "icon-bell-slash-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9668,
    key: "icon-trash",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9669,
    key: "icon-copyright",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.966999999999,
    key: "icon-at",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9671,
    key: "icon-eyedropper",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9672,
    key: "icon-paint-brush",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9673,
    key: "icon-birthday-cake",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9674,
    key: "icon-area-chart",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.967499999999,
    key: "icon-pie-chart",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9676,
    key: "icon-line-chart",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9677,
    key: "icon-lastfm",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9678,
    key: "icon-lastfm-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9679,
    key: "icon-toggle-off",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.967999999999,
    key: "icon-toggle-on",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9681,
    key: "icon-bicycle",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9682,
    key: "icon-bus",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9683,
    key: "icon-ioxhost",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9684,
    key: "icon-angellist",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.968499999999,
    key: "icon-cc",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9686,
    key: "icon-ils",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9687,
    key: "icon-shekel",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.968799999999,
    key: "icon-sheqel",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9689,
    key: "icon-meanpath",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.969,
    key: "icon-buysellads",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9691,
    key: "icon-connectdevelop",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9692,
    key: "icon-dashcube",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.969299999999,
    key: "icon-forumbee",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9694,
    key: "icon-leanpub",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9695,
    key: "icon-sellsy",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9696,
    key: "icon-shirtsinbulk",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9697,
    key: "icon-simplybuilt",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.969799999999,
    key: "icon-skyatlas",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9699,
    key: "icon-cart-plus",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.97,
    key: "icon-cart-arrow-down",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9701,
    key: "icon-diamond",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9702,
    key: "icon-ship",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.970299999999,
    key: "icon-user-secret",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9704,
    key: "icon-motorcycle",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9705,
    key: "icon-street-view",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.970599999999,
    key: "icon-heartbeat",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9707,
    key: "icon-venus",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9708,
    key: "icon-mars",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9709,
    key: "icon-mercury",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.971,
    key: "icon-intersex",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.971099999999,
    key: "icon-transgender",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9712,
    key: "icon-transgender-alt",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9713,
    key: "icon-venus-double",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9714,
    key: "icon-mars-double",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9715,
    key: "icon-venus-mars",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.971599999999,
    key: "icon-mars-stroke",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9717,
    key: "icon-mars-stroke-v",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9718,
    key: "icon-mars-stroke-h",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9719,
    key: "icon-neuter",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.972,
    key: "icon-genderless",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.972099999999,
    key: "icon-facebook-official",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9722,
    key: "icon-pinterest-p",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9723,
    key: "icon-whatsapp",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.972399999999,
    key: "icon-server",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9725,
    key: "icon-user-plus",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9726,
    key: "icon-user-times",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9727,
    key: "icon-bed",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9728,
    key: "icon-hotel",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.972899999999,
    key: "icon-viacoin",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.973,
    key: "icon-train",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9731,
    key: "icon-subway",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9732,
    key: "icon-medium",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9733,
    key: "icon-y-combinator",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.973399999999,
    key: "icon-yc",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9735,
    key: "icon-optin-monster",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9736,
    key: "icon-opencart",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9737,
    key: "icon-expeditedssl",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9738,
    key: "icon-battery-4",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.973899999999,
    key: "icon-battery-full",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.974,
    key: "icon-battery-3",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9741,
    key: "icon-battery-three-quarters",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.974199999999,
    key: "icon-battery-2",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9743,
    key: "icon-battery-half",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9744,
    key: "icon-battery-1",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9745,
    key: "icon-battery-quarter",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9746,
    key: "icon-battery-0",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.974699999999,
    key: "icon-battery-empty",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9748,
    key: "icon-mouse-pointer",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9749,
    key: "icon-i-cursor",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.975,
    key: "icon-object-group",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9751,
    key: "icon-object-ungroup",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.975199999999,
    key: "icon-sticky-note",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9753,
    key: "icon-sticky-note-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9754,
    key: "icon-cc-jcb",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9755,
    key: "icon-cc-diners-club",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9756,
    key: "icon-clone",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.975699999999,
    key: "icon-balance-scale",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9758,
    key: "icon-hourglass-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9759,
    key: "icon-hourglass-1",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.975999999999,
    key: "icon-hourglass-start",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9761,
    key: "icon-hourglass-2",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9762,
    key: "icon-hourglass-half",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9763,
    key: "icon-hourglass-3",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9764,
    key: "icon-hourglass-end",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.976499999999,
    key: "icon-hourglass",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9766,
    key: "icon-hand-grab-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9767,
    key: "icon-hand-rock-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9768,
    key: "icon-hand-paper-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9769,
    key: "icon-hand-stop-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.976999999999,
    key: "icon-hand-scissors-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9771,
    key: "icon-hand-lizard-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9772,
    key: "icon-hand-spock-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9773,
    key: "icon-hand-pointer-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9774,
    key: "icon-hand-peace-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.977499999999,
    key: "icon-trademark",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9776,
    key: "icon-registered",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9777,
    key: "icon-creative-commons",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.977799999999,
    key: "icon-gg",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9779,
    key: "icon-gg-circle",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.978,
    key: "icon-tripadvisor",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9781,
    key: "icon-odnoklassniki",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9782,
    key: "icon-odnoklassniki-square",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.978299999999,
    key: "icon-get-pocket",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9784,
    key: "icon-wikipedia-w",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9785,
    key: "icon-safari",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9786,
    key: "icon-chrome",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9787,
    key: "icon-firefox",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.978799999999,
    key: "icon-opera",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9789,
    key: "icon-internet-explorer",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.979,
    key: "icon-television",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9791,
    key: "icon-tv",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9792,
    key: "icon-contao",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.979299999999,
    key: "icon-500px",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9794,
    key: "icon-amazon",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9795,
    key: "icon-calendar-plus-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.979599999999,
    key: "icon-calendar-minus-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9797,
    key: "icon-calendar-times-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9798,
    key: "icon-calendar-check-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9799,
    key: "icon-industry",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.98,
    key: "icon-map-pin",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.980099999999,
    key: "icon-map-signs",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9802,
    key: "icon-map-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9803,
    key: "icon-map",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9804,
    key: "icon-commenting",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9805,
    key: "icon-commenting-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.980599999999,
    key: "icon-houzz",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9807,
    key: "icon-vimeo",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9808,
    key: "icon-black-tie",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9809,
    key: "icon-fonticons",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.981,
    key: "icon-reddit-alien",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.981099999999,
    key: "icon-edge",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9812,
    key: "icon-credit-card-alt",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9813,
    key: "icon-codiepie",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.981399999999,
    key: "icon-modx",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9815,
    key: "icon-fort-awesome",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9816,
    key: "icon-usb",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9817,
    key: "icon-product-hunt",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9818,
    key: "icon-mixcloud",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.981899999999,
    key: "icon-scribd",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.982,
    key: "icon-pause-circle",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9821,
    key: "icon-pause-circle-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9822,
    key: "icon-stop-circle",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9823,
    key: "icon-stop-circle-o",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.982399999999,
    key: "icon-shopping-bag",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9825,
    key: "icon-shopping-basket",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9826,
    key: "icon-hashtag",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9827,
    key: "icon-bluetooth",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.9828,
    key: "icon-bluetooth-b",
    style: {
        text: ""
    }
}, {
    isClass: true,
    priority: 10000.982899999999,
    key: "icon-percent",
    style: {
        text: ""
    }
}, {
    isId: true,
    priority: 100000.0855,
    key: "closeBtn",
    style: {
        bottom: 40
    }
} ];