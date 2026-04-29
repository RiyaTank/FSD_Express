var express = require("express")
var app = express()
var path = require("path")

app.set("view engine", "ejs")
app.set("views", path.join(__dirname))
app.get("/", (req, res) => {
    res.render("ex", { "name": "Riyaa" })
})

app.listen(3000)

