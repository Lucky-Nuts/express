//必要なライブラリのロード
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helloRouter = require('./routes/hello');//1031追加
var notesRouter = require('./routes/notes');//1111追加
//var notes2Router = require('./routes/notes2');//1121追加
var catRouter = require('./routes/cat');//1122追加
var yes_noRouter = require('./routes/yes_no');//1122追加
var notes_from_bRouter = require('./routes/notes_from_b');//0114追加

//オブジェクトの作成
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hello', helloRouter);//1031追加
app.use('/notes', notesRouter);//1111追加
//app.use('/notes2', notes2Router);//1121追加
app.use('/cat', catRouter);//1122追加
app.use('/yes_no', yes_noRouter);//1122追加
app.use('/notes_from_b', notes_from_bRouter);//0114追加

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

module.exports = app;
