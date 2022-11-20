var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var alunosDataRouter = require('./routes/alunos_data');
var professoresDataRouter = require('./routes/professores_data');
var cursosDataRouter = require('./routes/cursos_data');
var diciplinasDataRouter = require('./routes/diciplinas_data');
var semestreDataRouter = require('./routes/semestre_data');

var app = express();

// view engine setup
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/alunos_data', alunosDataRouter);
app.use('/professores_data', professoresDataRouter);
app.use('/cursos_data', cursosDataRouter);
app.use('/diciplinas_data', diciplinasDataRouter);
app.use('/semestre_data', semestreDataRouter);


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
app.listen(3333);