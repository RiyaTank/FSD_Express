
// write express js using session to display how many times a user visited a website if user is
// visting a website for the first time when display "wlcm thnk u  for visting website" else display the
// count how many times user visited the website for that particular session.

var express = require("express")
var app = express()
var sess = require("express-session")
app.use(sess({
    secret: "LJU123",
    saveUninitialized: true,
    resave: true
}))
app.get("/", (req, res) => {
    if (req.session.views) {
        req.session.views++
        res.send(`<h1>Welcome back... you visited this page ${req.session.views} times</h1>`)
    } else {
        req.session.views = 1
        res.send("<h1>Welcome... thank you for visiting our website</h1>")
    }
})

app.listen(3120, () => {
    console.log("Server is running on port 3120")
})



// oneday = 1000 * 60 * 60 * 24
// app.use(sessions({
//     secret: "the secret key",
//     saveUninitialized:true,
//     cookie: { maxAge: oneday },
//     resave: false
// }))
