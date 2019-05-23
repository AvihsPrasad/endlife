const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const mongoose = require('mongoose');
const logger = require('morgan');
const routes = require('./routes/path')
mongoose.connect('mongodb://localhost:27017/lifedb')
    .then(() => {
        console.log('Database connected');
    })
    .catch(() => {
        console.log('error while connecting ...');
    })

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api', routes)

app.listen(port, () => {
    console.log('Server Online ....');
})