// write express js
// 1. html form with user name,password and sumbit button use post method
// 2. on visiting / show the form
// 3. on sumbiting to login page if user name is admin display wlcm admin else show is login with admin name
// and a link back to the form.

var express = require("express")
var app = express()
app.use(express.urlencoded({ extended: true }))
// app.use(express.static(__dirname,{index:'user.html'}))
// or
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
        res.send("<h1 style='color:red'>Warning: Invalid username</h1><a href='/'>Back to Login</a>")
    }
}, (req, res) => {
    res.send("<h1>Welcome... admin</h1><a href='/'>Back to Login</a>")
})

app.listen(3120, () => {
    console.log("Server is running on port 3120")
})