cp = require("cookie-parser")

var express = require("express")
var app = express()

app.use(cp())
app.get("/cookie", (req, res) => {
    res.cookie("name", "Express JS")
    res.cookie("fname", "Riyaaa")
    res.cookie("lname", "Tank")
    res.cookie("ID", "1", { expires: new Date(Date.now() + 10000) })
    res.cookie("email", "rt@gmail.com", { maxAge: 5000 })

    res.clearCookie("lname")
    res.send(req.cookies)
})

app.listen(3120, () => {
    console.log("Server is running on port 3120")
})