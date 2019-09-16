const express = require('express');
const app = express();
var path = require('path');
const morgan = require('morgan');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var session = require('express-session');

const matrixController = require('./api/routes/MatrixController');


mongoose.connect('mongodb://betlief1:'+
 process.env.MONGO_ATLAS_PW +
 '@node-rest-digiemniyet-shard-00-00-mqpkd.mongodb.net:27017,node-rest-digiemniyet-shard-00-01-mqpkd.mongodb.net:27017,node-rest-digiemniyet-shard-00-02-mqpkd.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-digiemniyet-shard-0&authSource=admin&retryWrites=true', 
{
    useMongoClient: true
}
);

// view engine setup
app.set('views', path.join(__dirname, 'api/views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'api/views/pages/assets')));
app.use(session({
  secret: 'thesecret',
  saveUninitialized: false,
  resave: false
}))

app.use((req,res,next) => {
    
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    //res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});



app.use('/matrix', matrixController);

app.use((req,res,next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;