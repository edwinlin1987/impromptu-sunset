var passport = require('passport');
var db = require('../models/index.js');

module.exports = {

  signup: function(req, res, next){
    var username = req.body.username;
    var password = req.body.password;

    // Create a new user
    var newuser = db.User.build({username:username, password:password});
    newuser.save().then(function(){
      // once the user is created, will sign him in aswell
      passport.authenticate('local') (req, res, function() {
        res.send(newuser);
      });
    }).catch(db.Sequelize.ValidationError, function (err) {
        // respond with validation errors - in case the user already exists
        return res.status(422).send(err.errors);
    });
    
  },
  
  list: function(req, res, next) {
    db.User.findAll().then(function(users){
      res.status(201).send(users);
    });
  },

  signout: function(req, res, next){
    // destroy session and log user out
    req.logout();
    res.status(200).send("Successfully Logged Out");
  }

};