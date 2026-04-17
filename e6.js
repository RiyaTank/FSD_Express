// write express js to define  one json array of 3 objects having properties name and age of singer
// sort this object according  to if user requests sorted name in url then all names along with age should be printed according to
//  displayed according to desending order of age display these sorted values on sort page and
// display json object on home page.

var express = require("express")
var app = express()

object = [
    {
        name: "Singer1",
        age: 25
    },
    {
        name: "Singer2",
        age: 21
    },
    {
        name: "Singer3",
        age: 20
    }
]
app.get("/home", function (req, res) {
    res.json(object)
})

app.get("/sort", function (req, res) {
    res.set("content-type", "application/json")
    sortedObject = object.sort((a, b) => b.age - a.age)
    // res.write(JSON.stringify(sortedObject))
    res.send(sortedObject)
})

app.listen(5504, () => {
    console.log("Server is running on port 5504")
})