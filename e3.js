// JSON processing:--

var express = require("express")
var app = express()
student = {
    name: "Riya",
    age: 20
}
app.get("/student", function (req, res) {
    res.set("content-type", "application/json")
    res.write(JSON.stringify(student))
    res.send()

    // or

    // res.send(student)

    // or

    // res.json(student)
})
app.listen(5504, () => {
    console.log("Server is running on port 5504")
})