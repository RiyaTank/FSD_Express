// Query parameters:--

var express = require("express")
var app = express()

app.get("/data", (req, res) => {
    name = req.query.name
    age = req.query.age
    res.send("Name: " + name + " Age: " + age)
})

app.listen(5504, () => {
    console.log("Server is running on port 5504")
})