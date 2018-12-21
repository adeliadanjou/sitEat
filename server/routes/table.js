const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");
const Table = require("../models/Table");


router.post("/restaurant/:id", (req, res, next) => {
  
  User.findById(req.params.id)
    .then(thisUser => {

      newTable = new Table();
      newTable.user = req.user._id;
      newTable.restaurant = thisUser._id;
      newTable.mesa = req.body.mesa;
      newTable.name = req.body.name;
      newTable.chairs= req.body.chairs;
      newTable.pedido = req.body.pedido;
      

      console.log(newTable, 'Mesa Guardada')
       newTable.save()
       .then(table => {
        res.status(200).json(table);
      })

    })
    .then(() => console.log("todo ha ido bien, estamos preparando tu pedido"))
    .catch(err => {
      next(err);
      console.log("algo fue mal!");
    })
    
});

router.get('/misPedidos', (req, res, next) => {
  Table.find({user:req.user._id})
    .then(restaurant => {
      res.status(200).json({ restaurant });
    })
    .catch(error => {
      console.log(error)
    })
})

router.get('/myRestaurant', (req, res, next) => {
 
  Table.find({restaurant:req.user._id})
    .then(user => {
      res.status(200).json({ user });
    })
    .catch(error => {
      console.log("ocurrió un error patrón!")
    })
})


module.exports = router