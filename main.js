const express = require("express")
var app = express()

api = require("./rest_api")
app.use("/api", api)
app.listen(7899)