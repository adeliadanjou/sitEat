const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");


// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.post("/login", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return res.status(500).json({
        message: "Error authenticating user"
      });
    }
    if (!user) {
      return res.status(500).json({
        message: "No user in DB"
      });
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.status(200).json(user);
    });
  })(req, res, next);
});

router.post("/signup", (req, res, next) => {
  
  //todo: consider using destructuring operator
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const restaurant = req.body.restaurant;
  const restaurantName = req.body.restaurantName;
  const address = req.body.address;
  const zipCode = req.body.zipCode;

  const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyBp_NABj80aoBJsjKpHT6q7I1c9lLYB3gk',
    Promise: Promise
  });

  // lo meto dentro de la promesa para que se me guarde:
  if (username === "" || password === "") {
    res.status(400).json({
      message: "Provide username, email and password"
    });
    return;
  }

  //todo: check password strength

  User.findOne({
    username
  }, "username", (err, user) => {
    console.log("User:", user);

    if (user !== null) {
      res.status(400).json({
        message: 'Username taken. Choose another one.'
      });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      restaurant,
      email
    })

    //todo: consider refactor restaurant naming for better code understanding. Proposal: hasRestaurant
    if (restaurant) {
      
      ////
      

      ////

      //todo: very important! please ensure what happens if the geocoder cannot locate the provided address
      //todo: consider using https://developers.google.com/maps/documentation/javascript/examples/places-searchbox
      googleMapsClient.geocode({
          address
        })
        .asPromise()
        .then((response) => {
          

          //aqui consigo latitud y longitud:
          var lat = response.json.results[0].geometry.viewport.northeast.lat;
          var lng = response.json.results[0].geometry.viewport.northeast.lng;

          newUser.restaurantName = restaurantName;
          newUser.address = address;
          newUser.zipCode = zipCode;
          newUser.lat = lat;
          newUser.lng = lng;

          newUser.save()
            .then(user => {
              res.status(200).json(user);
            })
            .catch(err => {
              res.status(400).json({
                message: 'Saving user to database went wrong.'
              });
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {

      newUser.save()
        .then(user => {
          res.status(200).json(user);
        })
        .catch(err => {
          res.status(400).json({
            message: 'Saving user to database went wrong.'
          });
        });
    }
  })
});

router.post('/edit', (req, res, next) => {
  const myUser ={};


  const {
    username,
    email,
    restaurantName, 
    address,
    zipCode,
    lat,
    lng
  } = req.body;
  
  if (username !== ""){
    myUser.username = username; 
  }

  if (email !== ""){
    myUser.email = email; 
  }

  if (restaurantName !== ""){
    myUser.restaurantName = restaurantName; 
  }

  if (address !== ""){
    myUser.address = address; 
  }

  if (zipCode !== ""){
    myUser.zipCode = zipCode; 
  }

  if (lat !== ""){
    myUser.lat = lat; 
  }

  if (lng !== ""){
    myUser.lng = lng; 
  }


  User.findByIdAndUpdate(req.user._id, myUser, {
      new: true
    })

    .then((userUpdated) => {
      res.status(200).json({
        userUpdated
      })
    })
    .catch((err) => {
      console.log('error al actualizar usuario')
    })
})


router.get("/logout", (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({
    message: "Log out success!"
  });
});

router.get("/loggedin", (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({
    message: "Unauthorized"
  });
});

router.get("/myRestaurant", () => {
  res.status(200).json({
    message: "Log out success!"
  });
  const {
    username
  } = req.body;
})

router.get('/allRestaurants', (req, res, next) => {
  User.find({restaurant: true})
    .then(restaurant => {
      res.status(200).json({ restaurant });
    })
    .catch(error => {
      console.log(error)
    })
})

//restaurantes crean mesas:
// router.post("/Restaurant/:id", uploadCload.single("photo"), (req, res, next) => {
//   const { username, password } = req.body;
//   const pictureUrl = req.file.url;

  
//   if (username === "" || password === "") {
//     res.status(500).json({ message: "Indicate username and password" });
//     return;
//   }

//   User.findOne({ username }, "username", (err, user) => {
//     if (user !== null) {
//       res.status(500).json({ message: "The username already exists" })
//       return;
//     }

//     const salt = bcrypt.genSaltSync(bcryptSalt);
//     const hashPass = bcrypt.hashSync(password, salt);

//     const newUser = new User({
//       username,
//       password: hashPass,
//       pictureUrl
//     });

//     newUser.save((err, user) => {
//       if (err) {
//         res.status(500).json({ message: "Something went wrong" });
//       } else {
//         req.login(user, (err) => {

//           if (err) {
//               res.status(500).json({ message: 'Login after signup went bad.' });
//               return;
//           }

//           res.status(200).json(user);
//       });
//       }
//     });
//   });
// });


module.exports = router;