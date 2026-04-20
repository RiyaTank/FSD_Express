// write an express js to set cookies of sumbited values perform following task:
// 1. create an html file which contains a form with fields firstname,lastname, password and a sumbit button
// 2. ones form sumbited store this enter value to the respective cookies on "/next" page.
// 3. when redirct a user to "/admin" page and clear the cookies set for the lastname display remaing set of cookies on this page
// using post method.


var express = require("express")
var app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname, { index: "cookies_2.html" }))

cp = require("cookie-parser")
app.use(cp())

app.post("/next", (req, res) => {
    res.cookie("firstname", req.body.firstname)
    res.cookie("lastname", req.body.lastname)
    res.cookie("password", req.body.password)
    res.redirect("/admin")
})

app.get("/admin", (req, res) => {
    res.clearCookie("lastname")
    res.send(req.cookies.firstname + "<br>" + req.cookies.password + "</br>" + req.cookies.lastname)
})

app.listen(3120, () => {
    console.log("Server is running on port 3120")
})  