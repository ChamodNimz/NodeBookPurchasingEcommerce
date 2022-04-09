// import relavant models
const User = require('../models/user')
const jwt = require('jsonwebtoken');
const config = require('../config');

// authenticate
const authenticate = (req, res) => {
  let username = req.body.username;
  let role = req.body.role;
  let password = req.body.password;

  User.getUserByUsername(username,role, (err, user) => {
    if (!err) {
      if (user) {
        User.comparePassword(password, user.password, function (err, isMatch) {
          if (!err) {
            if (isMatch) {
              const token = jwt.sign(
                {
                  id: user._id,
                  username: user.username,
                  role: user.role,
                },
                config.secret,
                {
                  expiresIn: 604800, // week
                }
              );

              res.send({
                success: true,
                token: "Bearer " + token,
                user: { username: user.username, id: user._id },
              });
            } else {
              res.send({
                success: false,
                data: null,
                message: "Password doesn't match ...",
              });
            }
          } else {
            res.send({ success: false, message: "error..." });
            throw err;
          }
        });
      } else {
        res.send({ success: false, data: null, message: "No user found ..." });
        throw err;
      }
    } else {
      res.send({ success: false, message: "Error occured" });
      throw err;
    }
  });
};


module.exports = {
    authenticate
}