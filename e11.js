var express = require("express")
var app = express()

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send(`<h1> Employee details </h1>
        <form action="/details" method="post">
        name:<input type="text" name="t1"/><br>
        gender:<input type="radio" name="t2" value="male">male
        <input type="radio" name="t2" value="female">female
        <input type="radio" name="t2" value="other">other
        <br><br>
        skill:<input type="checkbox" name="t3" value="java">Java
        <input type="checkbox" name="t3" value="python">Python
        <input type="checkbox" name="t3" value="javascript">Javascript
        <br><br>
        Dept:<input type="text" name="t4"/>

        <button type="sumbit">click here</button>
        </form>`)

})

app.post("/details", (req, res) => {
    name = req.body.t1
    gender = req.body.t2
    skill = req.body.t3
    dept = req.body.t4
    res.send("Name: " + name + "\n Gender: " + gender + " \nSkill: " + skill + " \nDept: " + dept)
})

app.listen(3120, () => {
    console.log("Server is running on port 3120")
})