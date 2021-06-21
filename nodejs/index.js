const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require('cors');


const { mongoose } = require('./mongodb.js');
const PORT = 3300;
var commentscontroller = require('./controllers/commentscontroller.js');

var app = express();
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.listen(PORT, () => console.log('Server started at port : ' + PORT ));
//console.log(Date.now());

app.use('/comments',commentscontroller);