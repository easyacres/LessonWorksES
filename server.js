// Change to Server.js

const express = require('express');
// const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

// const passport = require('./passport');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 8080;
const log = console.log;
mongoose.connect('mongodb://localhost/lesson-works-es-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});


app.use(logger('dev'));
app.use(express.json());
    if (process.env.NODE_ENV === "production") {
      app.use(express.static("client/build"));
    }
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/authentication', usersRouter);
app.use(passport.initialize());
// app.use(passport.session());

app.listen(PORT, () => {
    console.log(`Server is Listening on PORT ${PORT}`);
});

module.exports = app;
