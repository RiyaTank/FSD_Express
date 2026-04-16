

// create the web server that excepts a get request with dynamic user id in the url
// also excepts additional data name and age using query parameters extract id from root parameter
// name and age from query strings returns a json responce contaning all recive data

var express = require('express');
var app = express();

app.get("/user/:id", (req, res) => {
    id = req.params.id
    name = req.query.name
    age = req.query.age
    res.json({ id: id, name: name, age: age })
})

app.listen(3120, () => {
    console.log("Server is running on port 3120")
})