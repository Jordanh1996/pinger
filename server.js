const http = require('http');

setInterval(() => {
    http.get("http://expensify-jordan.herokuapp.com/");
    http.get("http://expensifyserver.herokuapp.com/");
    http.get("http://blog-jordan.herokuapp.com/");
    http.get("http://blogserver-jordan.herokuapp.com/");
    http.get("http://pinger-jordan/");
}, 300000); // every 5 minutes (300000)