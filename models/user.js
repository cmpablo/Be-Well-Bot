const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// define user model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true, required: true },
  password: { type: String, required: true },
  logged_sessions: {
    exercise: { 
      date: { type: Date, default: Date.now },
      type: { type:String, lowercase: true }
  }}
});

// on save hook, encrypt password (runs before user gets saved)
userSchema.pre('save', function(next) {

  // gets access to user model
  const user = this;

  // generate a salt then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) throw err;

    // hash password using salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) throw err;

      // overwrite text pw with encrypted pw
      user.password = hash;
      next();
    });
  });
});

// create model class
const User = mongoose.model('User', userSchema);

// export the model
module.exports = User;