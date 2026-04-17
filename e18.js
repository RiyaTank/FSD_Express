var express = require("express");
var app = express();

app.use(express.static(__dirname, { index: "calc.html" }));

app.get("/calc", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const operation = req.query.operation;

    // 1. Check if operation is selected first
    if (operation === "select") {
        return res.send("<h1>You have not selected any formula.</h1>");
    }

    // 2. Validate numbers
    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
        return res.send("<h1>Please enter valid numbers greater than 0.</h1>");
    }

    let result;
    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "subtract") {
        result = num1 - num2;
    } else if (operation === "multiply") {
        result = num1 * num2;
    } else if (operation === "divide") {
        result = num1 / num2;
    }

    // 3. Send result as a string
    res.send("The result is: " + result.toString());
});

app.listen(3120, () => {
    console.log("Server is running on port 3120");
});
