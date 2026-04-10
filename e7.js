// Route parameters:--
var express = require("express")
var app = express()

app.get("/calender/:day/event/:ename", function (req, res) {
    res.send(req.params)
})

app.listen(5504, () => {
    console.log("Server is running on port 5504")
})