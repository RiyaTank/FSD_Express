var express = require("express")
var app = express()

employe = {
    name: "Riya",
    age: 20,
    description: "Devloper"
}

app.get("/home", function (req, res) {
    res.json(employe)
})

app.get("/about", function (req, res) {
    res.write(employe.description + " " + employe.name + " " + "is" + " " + employe.age + " " + "years old")
    res.send()
})

app.get("/contact", function (req, res) {
    res.send(employe.name)
})

app.listen(5504, () => {
    console.log("Server is running on port 5504")
})