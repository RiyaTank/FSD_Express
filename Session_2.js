// write a script to meet following requirements:
// 1. craete index.html file which contains username,password,login button and open on local host
// 2. after clicking button it should jump on save page store username and password in session
// 3. after saving redirected to fetch page read value put a log out link here jump on delete session page atfter clicking on logout link
// distroy the session and redirect to index.html page.

var express = require("express")
var app = express()
var sess = require("express-session")
app.use(sess({
    secret: "Riya29",
    saveUninitialized: true,
    resave: true
}))
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Session_2.html")
})
app.get("/save", (req, res) => {
    req.session.username = req.query.username
    req.session.password = req.query.password
    res.redirect("/fetch")
})

app.get("/fetch", (req, res) => {
    if (req.session.username && req.session.password) {
        res.send(`<h1>Welcome ${req.session.username}</h1><a href="/delete">Logout</a>`)
    } else {
        res.redirect("/")
    }
})

app.get("/delete", (req, res) => {
    req.session.destroy()
    res.redirect("/")
})

app.listen(3120, () => {
    console.log("Server is running on port 3120")
})  
