var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

App = Alloy.createWidget("co.grantges.bootstrap", {
    User: {
        theme: "Test"
    }
}).App;

Alloy.createController("index");