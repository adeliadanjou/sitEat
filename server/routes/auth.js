const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.post("/login", function(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return res.status(500).json({ message: "Error authenticating user" });
    }
    if (!user) {
      return res.status(500).json({ message: "No user in DB" });
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.status(200).json(user);
    });
  })(req, res, next);
});

router.post("/signup", (req, res, next) => {

  const username = req.body.username;
  const password = req.body.password;
  const email    = req.body.email;
  const restaurant = req.body.restaurant;
  const restaurantName = req.body.restaurantName;
  const address = req.body.address;
  const zipCode = req.body.zipCode;

  if (username === "" || password === "") {
    res.status(400).json({ message: "Provide username, email and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: 'Username taken. Choose another one.'});
      return;
    }
      
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      email,
      restaurant,
      restaurantName,
      address,
      zipCode,
      
    });

    newUser.save()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(400).json({ message: 'Saving user to database went wrong.'});
         });
  });
  
});


router.post('/edit', (req, res, next)=> {
 const {username, email} = req.body;
 User.findByIdAndUpdate(req.user._id, {username}, {new: true})
 .then((userUpdated) => {
   res.status(200).json({userUpdated})
 })
 .catch((err) => {
   console.log(err)})
})


router.get("/logout", (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: "Log out success!" });
});

router.get("/loggedin", (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: "Unauthorized" });
});

module.exports = router;
