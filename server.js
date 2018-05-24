const express = require('express');
const http = require('http');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('this app is awake');
});

const awakeServers = () => {
    axios.get("http://expensify-jordan.herokuapp.com/")
    axios.get("http://expensifyserver.herokuapp.com/expense/userid/1")
    axios.get("http://blog-jordan.herokuapp.com/");
    axios.get("http://blogserver-jordan.herokuapp.com/blog/10");
    axios.get("http://pinger-jordan.herokuapp.com/");
    axios.get("https://lit-meadow-67581.herokuapp.com/");
    axios.get("https://idanhazan.herokuapp.com/");
    console.log('ping');
};

// awakeServers();

setInterval(() => {
    awakeServers()
}, 300000); // every 5 minutes (300000)


app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});
