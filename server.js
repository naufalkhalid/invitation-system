const express    = require('express');        // call express
const app        = express();                 // define our app using express
const server = require('http').Server(app);
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');



// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//////////////////
// Server Setup
//////////////////

app.set("env", process.env.NODE_ENV || "development");
app.set("host", process.env.HOST || "localhost");
app.set("port", process.env.PORT || 5000);
app.use(helmet());
app.disable('x-powered-by');

const rest_api = require('./app/index')
app.use(rest_api);

server.listen(app.get("port"), () => {
    console.log(`Listening to port ${app.get("port")}`)
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    .json({
      status: 'error',
      message: err.message || err
    })
    .end();
  });

module.exports = app;
