//   print msg in next line spliting by dot and use get method to submit data html file contains
//  form of textarea for the msg and submit button.(2.html)

var express = require("express")
var app = express()

app.use(express.static(__dirname, { index: "2.html" }))
app.get("/process", (req, res) => {
    const msg = req.query.msg || "";
    const splitMsg = msg.split(".");
    const formattedMsg = splitMsg.join("<br>");
    console.log("Received message:", msg);
    res.send("<h1>" + formattedMsg + "</h1>");
})

app.listen(3120, () => {
    console.log("Server is running on port 3120")
})