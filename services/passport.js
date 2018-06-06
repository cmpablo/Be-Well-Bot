const passport = require('passport');
const User = require('./../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// set up options for JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // see if user id in payload exists in database
  // if it does, call 'done'
  // otherwise, call 'done' without a user object
  User.findById(payload.sub, function(err, user) {
    if (err) {
      return done(err, false);
    }
    if (user) {
      // user found
      done(null, user);
    } else {
      // user not found
      done(null, false);
    }
  });
});

// tell passport to use this strategy
passport.use(jwtLogin);