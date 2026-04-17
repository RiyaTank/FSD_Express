//  index.html
var express = require("express")
var app = express()

app.use(express.static(__dirname))
app.get("/process", (req, res) => {
    fname = req.query.fname
    lname = req.query.lname
    console.log(req.query)
    res.send("Welcome " + fname + " " + lname)
})

app.listen(3120, () => {
    console.log("Server is running on port 3120")
})