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
	res.status(200).send({ count: counter});
});

app.post('/messages', (req, res) => {
	messages.push(req.body.msg)
	res.status(200).send(messages)
});
app.get('/messages', (req, res) => {
	res.status(200).send(messages)
})
app.get('/*', (req, res) => {
	res.status(404).send('404 not found')
})

app.listen(8080);
