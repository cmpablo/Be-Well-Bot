const User = require('./../models/user');

exports.signup = function(req, res, next) {
  //console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  const loggedSession = req.body.exercise;

  if (!email || !password) {
    return res.status(422).send({
      error: 'You must provide email and password'
    });
  };

  // see if user with given email exist
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) throw err;
    
    // if user with email DOES exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' })
    }

    // if user does NOT exist, create and save user record
    const user = new User({
      email: email,
      password: password
    });

    user.save(function(err) {
      if (err) throw err;
    });

    // respond to request indicating user was created
    res.json({ "success": "New user created!" });
    
  });

  


  


  
};