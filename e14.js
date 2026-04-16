// devlop a web app that simulates a clg classroom entry system using middleware when a student access the class root
// log that the student enter enter the campus
// 2. verify wether the student has a valid id card if vaild allow entry and display a wlcm msg
// if not vaild denied access .

var express = require("express")
var app = express()

const entrylog = (req, res, next) => {
    console.log("Student entered the campus..")
    next()
}

const verifyid = (req, res, next) => {
    const hasID = req.query.hasid === 'true'; // Simulating ID check via URL param
    const name = req.query.name || "Student"; // Get student name from query or default to "Student"
    if (hasID) {
        console.log("[VERIFY]: ID Valid. Access Granted.");
        next(); // Proceed to the classroom
    } else {
        console.log("[VERIFY]: No ID found. Access Denied.");
        res.status(403).send("<h1>Access Denied!</h1><p>You need a valid ID card to enter the classroom.</p>");
    }
}

app.get("/classroom", entrylog, verifyid, (req, res) => {
    res.send("Welcome  " + req.query.name + "  to the classroom")
})

app.listen(3120, () => {
    console.log("Server is running on port 3120")
})