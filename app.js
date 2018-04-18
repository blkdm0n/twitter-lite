const express = require('express');
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(__dirname + `/public`));

var tweets = [
  
]

app.get