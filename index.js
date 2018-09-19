const express = require('express');
const port = 3100;
const app = express();

app.get('/', function (req, res) {
    res.send('This is home');
});

app.get('/articles', function (req, res) {
    res.send(`This is articles`);
});

app.get('/articles/:id', function (req, res) {
    res.send(`article is - ${req.params.id}`);
});

app.listen(port);

console.log(`Server started on ${3100} port`);