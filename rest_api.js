// REST_API :  REpresetational State Tranfer
// write an express js code which rest api created for json object named data which contains name,
// id, brach, city and contact properties
// 1. on api page it should display all the content
// 2. upon passing id on the browser url it should display the content having get id(localhost:7899/api/101)
// 3. upon passing branch on the browser url it should display the content having that branch(localhost:7899/api/branch/it)


var expres = require("express")
var router = expres.Router()
const data = [
    {
        id: 101,
        name: "ABC",
        branch: "IT",
        city: "A'bad",
        contact: "1234567890"
    },
    {
        id: 102,
        name: "BCD",
        branch: "CE",
        city: "A'bad",
        contact: "1234567890"
    },
    {
        id: 103,
        name: "XYZ",
        branch: "CSE",
        city: "A'bad",
        contact: "1234567890"
    },
    {
        id: 104,
        name: "PQR",
        branch: "IT",
        city: "A'bad",
        contact: "1234567890"
    },
    {
        id: 105,
        name: "ABC",
        branch: "CSE",
        city: "A'bad",
        contact: "1234567890"
    },
    {
        id: 106,
        name: "ABC",
        branch: "IT",
        city: "A'bad",
        contact: "1234567890"
    }
]

router.get("/", (req, res) => {
    res.set("content-type", "text/html")
    for (i of data) {
        res.write("<h3> ID: " +
            JSON.stringify(i.id) +
            "NAME: " + i.name +
            "branch: " + i.branch +
            "contact: " + i.contact +
            "city: " + i.city +
            "</h3>"
        )
    }
    res.send()
})

router.get("/:id", (req, res) => {
    var current_data = data.filter((i1) => i1.id == req.params.id)
    if (current_data.length > 0) {
        res.send(current_data)
    }
    else {
        res.send("No data found")
    }
})

router.get("/branch/:branch", (req, res) => {
    var cd = data.filter((b) => b.branch.toLowerCase() === req.params.branch.toLowerCase())
    if (cd.length > 0) {
        res.send(cd)
    }
    else {
        res.send("No data found")
    }
})

module.exports = router