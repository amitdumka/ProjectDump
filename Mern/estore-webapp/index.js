var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser= require('body-parser');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Load Config file.
const dotenv=require('dotenv')
dotenv.config({path:"./config/config.env"})
const connectDB=require("./config/db")
connectDB()

const allRouters=require("./routes/allRoutes")
var app = express();
app.use(cors());
// Setup engine
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// view engine setup
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

app.use('/home', indexRouter);
 app.use('/home/users', usersRouter);
//Adding API Routes here
const storeRoute = require('./routes/stores/stores.route')
const empRoute = require('./routes/payrolls/employee.route')
const attendanceRoute = require('./routes/payrolls/attendance.route')
app.use('/api/stores',storeRoute);
app.use('/api/employees',empRoute);
app.use('/api/attendances',attendanceRoute);

// All api need to called above this line
//ClientApp
app.use(express.static(path.join(__dirname, 'ClientApp/build')));
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname + '/ClientApp/build/index.html'))
 });
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  });




