var express = require("express")
var app = express()

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send(`<h1> User form </h1>
        <form action="/result" method="post">
        T1:<input type="number" name="t1"/>
        T2:<input type="number" name="t2"/>
        T3:<input type="number" name="t3"/>
        T4:<input type="number" name="t4"/>

        <button type="avgrage">Average</button>
        </form>`)

})

app.post("/result", (req, res) => {
    Average = (parseInt(req.body.t1) + parseInt(req.body.t2) + parseInt(req.body.t3) + parseInt(req.body.t4)) / 4
    res.send("Average: " + Average)
})

app.listen(3120, () => {
    console.log("Server is running on port 3120")
})

// extended: true (qs) and false(query string)
// app.use() :-- to attach middleware fun to your application