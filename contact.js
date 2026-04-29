// write node express application to perfom the following task:
// 1. create an ejs file named contact.ejs that displays a heading contact form and a form with name , email is and sumbit button
// 2. reander this ejs on the contact root
// 3. handle form sumbission using post method on sumbit root
// 4. after form sumbission display a msg on the browser 'thank u name' we have recived email

var express = require("express")
var app = express()
app.set("view engine", "ejs")
app.use(express.urlencoded())
app.get("/contact", (req, res) => {
    res.render("contact")
})
app.post("/submit", (req, res) => {
    name = req.body.name
    email = req.body.email
    res.send(`Thank uu...${name} , we have recived your ${email}`)
})

app.listen(3000)
