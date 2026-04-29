// Devloap a web application using express and ejs to accept marks t1, t2, t3, t4 each out of 25 threw a form using post method
//  after sumbission display or enterd marks in a tabuler formate along with the total marks and ditermine the results
// if total is 35 or more pass otherwise fail

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // Middleware to parse POST data

// Route to display the form
app.get('/', (req, res) => {
    res.render('marks', { data: null });
});

// Route to handle form submission
app.post('/calculate', (req, res) => {
    const { t1, t2, t3, t4 } = req.body;

    const marks = [Number(t1), Number(t2), Number(t3), Number(t4)];
    const total = marks.reduce((acc, curr) => acc + curr, 0);
    const result = total >= 35 ? "Pass" : "Fail";

    res.render('marks', {
        data: { t1, t2, t3, t4, total, result }
    });
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
