const http = require('http');

setInterval(() => {
    http.get("https://expensify-jordan.herokuapp.com/");
    http.get("https://expensifyserver.herokuapp.com/");
    http.get("https://blog-jordan.herokuapp.com/");
    http.get("https://blogserver-jordan.herokuapp.com/");
    http.get("https://pinger-jordan/");
}, 300000); // every 5 minutes (300000)