const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/flower', function(req, res) {
    res.sendFile(__dirname + '/flower.html');
});

app.listen(port, function() {
    console.log('Сервер запущен на порту ' + port);
});
