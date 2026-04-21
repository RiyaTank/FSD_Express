// Write express js script to perform following tasks.
// 1. Create one html file which contains one text field for name, email field and checkbox for subscription.
// Html file will be loaded on home page.Email and name fields are required fields.
// 2. On login page welcome user and email id data should be printed.
//     a.If user checked the subscription then “Thank you for the subscription” message will be printed
// and “logout” link will be displayed under the message.If user clicks logout link then he / she will
// be redirected to the home page.
//     b.If user has not opted for the subscription then “You can subscribe to get daily updates” message
// will be printed and “subscribe” link will be displayed under the message.
//     c.If user clicks subscribe link then he / she will be redirected to the subscription page.In this page
// “Thank you for the subscription” message will be printed and “logout” link will be displayed
// under the message.If user clicks logout link then he / she will be redirected to the home page.
// Use concept of the middleware and you can use any of http methods(get / post).

//

const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));

// Middleware to simulate user session/data check
const checkUser = (req, res, next) => {
    const { name, email } = req.query;
    if (!name || !email) {
        return res.redirect('/');
    }
    next();
};

// 1. Home Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'examples.html'));
});

// 2. Login Logic (Redirects to Welcome page with data)
app.post('/login', (req, res) => {
    const { name, email, subscribe } = req.body;
    const isSubscribed = subscribe === 'on' ? 'yes' : 'no';
    res.redirect(`/welcome?name=${name}&email=${email}&subscribed=${isSubscribed}`);
});

// 2a & 2b. Welcome Page
app.get('/welcome', checkUser, (req, res) => {
    const { name, email, subscribed } = req.query;
    let html = `<h1>Welcome ${name} (${email})</h1>`;

    if (subscribed === 'yes') {
        html += `<p>Thank you for the subscription</p>
                 <a href="/">Logout</a>`;
    } else {
        html += `<p>You can subscribe to get daily updates</p>
                 <a href="/subscribe?name=${name}&email=${email}">Subscribe</a>`;
    }
    res.send(html);
});

// 2c. Subscription Page
app.get('/subscribe', checkUser, (req, res) => {
    res.send(`
        <h1>Thank you for the subscription</h1>
        <a href="/">Logout</a>
    `);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
