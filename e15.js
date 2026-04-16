// PB 144
// write an express.js script to load an HTML file having username and
// password and submit button. On clicking submit button. It should
// jump on "check" page using "POST" method. If username is "admin"
// , then jump on next middleware to print "welcome… admin" , if
// username is not "admin" , then stay on same middleware to print
// "warning msg" in red color.


var express = require("express")
var app = express()
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send(`<h1> Login Form </h1>
        <form action="/check" method="post">    
        username:<input type="text" name="t1"/>
        password:<input type="password" name="t2"/>
        <button type="submit">Submit</button>
        </form>`)
})

app.post("/check", (req, res, next) => {
    if (req.body.t1 == "admin") {
        next()
    } else {
        res.send("<h1 style='color:red'>Warning: Invalid username</h1>")
    }
}, (req, res) => {
    res.send("<h1>Welcome... admin</h1>")
})

app.listen(3120, () => {
    console.log("Server is running on port 3120")
})

