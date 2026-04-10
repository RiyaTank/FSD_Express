var express = require("express")
var app = express()

app.get("/", function (req, res) {
    res.set("content-type", "text/plain")
    res.send("Hello World")
})
app.listen(3005)
// res.set("content-type", "text/plain")
// res.type("text/plain")
// res.setHeader("content-type", "text/plain")
// app.get(path,callback)
// app.listen(port,[host],backlog(default value=511),callback
// send => write+ end
// writeHead => set
