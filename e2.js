// Routing:--
// app.method(path,handler)
// method: get (retrieve),post (send),put (update),delete (remove),all

var express = require("express")
var app = express()
app.get("/", function (req, res) {
    res.type("text/plain")
    res.send("<h1>Heyy uu</h1>")
})

app.get("/about", function (req, res) {
    res.type("text/html")
    // res.write("<h1>Yes uu</h1>")
    res.send("<h1> Be Happyy</h1>")
})
app.listen(5504, () => {
    console.log("Server is running on port 5504")
})