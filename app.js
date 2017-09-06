'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const multer = require('multer');
const cors = require('cors');

const upload = multer({dest: 'uploads/'});
const app = module.exports = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());


const port = process.env.PORT || 3000;

// app.get('/', function(req, res, next){
// 	res.sendFile(__dirname + "/index.html");
// });

app.post('/upload', upload.single('file'), function(req, res, next){
	return res.json(req.file);
});

app.listen(port, function(){
	console.log('Connected to port '+port);
});