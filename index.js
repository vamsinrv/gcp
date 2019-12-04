const express = require('express');
const app = express();
const stats = {};
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    let ip = req.connection.remoteAddress;
    stats[ip] = stats[ip] ? stats[ip] + 1 : 1;
    res.send(stats);
});
app.listen(8080);
