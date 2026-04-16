var express = require("express")
var app = express()

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send(`<h1> User form </h1>
        <form action="/user" method="post">
        <input type="text" name="t1"/>
        <button type="submit">Submit</button>
        </form>`)

})

app.post("/user", (req, res) => {
    name = req.body.t1
    res.send("Name: " + name)
})

app.listen(3120, () => {
    console.log("Server is running on port 3120")
})

// extended: true (qs) and false(query string)
// app.use() :-- to attach middleware fun to your application