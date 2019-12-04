const express = require('express');
const app = express();
const stats = {};
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    let ip = req.connection.remoteAddress;
    stats[ip] = stats[ip] ? stats[ip] + 1 : 1;
    res.send(stats);
    res.send('Hello GCP Disys');
    res.send("Hello GCP Disys");
});
app.listen(8080);
