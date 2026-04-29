// devloap a web application using express and ejs that allows user to enter a student name and marks
//  threw a form after sumbission application should display the entered details and determined
// the results if the marks are 9 or above show a pass in green color otherwise fail in red color..

var express = require("express")
var app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded())
app.get("/", (req, res) => {
    res.render("form")
})
app.post("/submit", (req, res) => {
    name = req.body.name
    marks = req.body.marks
    res.render("result", { name, marks })
})

app.listen(3000)

