/**
 * npm init -y
 * npm install express
 * npm install -g nodemon
 * make index.js
 * make a start script
 *
 */

const { json } = require('body-parser');
var express = require('express');
var app = express();
var counter = 0;
var messages = [];

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
	counter++;
	res.json({ count: counter.toString() });
});

app.post('/messages', (req, res) => {
	messages.push(req.body.msg)
	res.send(messages)
});
app.get('/messages', (req, res) => {
	res.send(messages)
})

app.listen(8080);
