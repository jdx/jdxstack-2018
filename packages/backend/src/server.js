"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.listen(process.env.PORT || 3000, function (server) {
    console.dir(server);
});
