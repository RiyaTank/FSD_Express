// Middleware:--

// middlename = (req, res, next) => {
//     next()
// }
// app.use("/", middlename)

// or

// app.get("/", middlename, (req, res) => {

// })

var express = require("express")
var app = express()
const addname = (req, res, next) => {
    req.name = "Riya"
    console.log("Name added..")
    next()
}

const clgname = (req, res, next) => {
    req.clg = "LJU"
    console.log("College name added..")
    next()
}

const addmarks = (req, res, next) => {
    req.total = 50 + 40
    console.log("Marks added..")
    next()
}

app.get("/student", addname, clgname, addmarks, (req, res) => {
    res.send("Name: " + req.name + " Total Marks: " + req.total + " College: " + req.clg)
})

app.listen(3120, () => {
    console.log("Server is running on port 3120")
})

// console output sequence form and browser output in res.send() sequence