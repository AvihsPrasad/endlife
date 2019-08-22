var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var logger = require('morgan');
var routes = require('./routes/path');
var cors = require('cors');
var app = express();

mongoose. Promise =global.Promise;
mongoose.connect('mongodb://localhost:27017/lifedb',{ useNewUrlParser: true })
    .then(() => {
        console.log('Database connected');
    })
    .catch(() => {
        console.log('error while connecting ...');
    })

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);

app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Cntrol-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    // res.header('Access-Control-Allow-Headers', 'authorization');
    next();
})

app.use('/api', routes)

app.listen(port, () => {
    console.log('Server Online ....');
})