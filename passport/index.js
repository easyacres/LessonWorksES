// Passport Configuration 
// Brings in Strategy then exports it.

const passport = require('passport');

const SignupStrategy = require('./SignupStrategy');
const SigninStrategy = require('./SigninStrategy');

passport.use('local-signin', SigninStrategy);
passport.use('local-signup', SignupStrategy);

module.exports = passport;