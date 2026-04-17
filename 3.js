var express = require("express")
var app = express()
app.use(express.static("frontend", { index: "3.html" }))
app.listen(3120, () => {
    console.log("Server is running on port 3120")
})
// path: js --> html --> css  (1.js --> 1.html --> 1.css)