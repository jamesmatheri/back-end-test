var express = require('express');
const cors = require('cors');
const path = require("node:path");
const session = require("express-session");
const passport = require("passport");
require('dotenv').config()



var growthRateRouter = require('./routes/growthrate');
var authRouter = require('./routes/auth');

var PORT = 3000;
var app = express();


app.use(cors({
    origin: "*", 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use('/growthrate', growthRateRouter);
app.use('/auth', authRouter);


app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

 
  res.status(err.status || 500);
  res.json({
    success: false,
    error: {
      message: req.app.get('env') === 'development' ? err.message : 'Something went wrong',
      ...(req.app.get('env') === 'development' && { stack: err.stack }) // Only include stack in development
    }});
});

app.listen(PORT, () => {
    console.log("OUr app is up and running")
})