const express = require('express');
const http = require('http');

const app = express();
port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('this app is awake');
});

setInterval(() => {
    http.get("http://expensify-jordan.herokuapp.com/");
    http.get("http://expensifyserver.herokuapp.com/");
    http.get("http://blog-jordan.herokuapp.com/");
    http.get("http://blogserver-jordan.herokuapp.com/");
    http.get("http://pinger-jordan/");
}, 300000); // every 5 minutes (300000)

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});
