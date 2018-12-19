const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");
const Table = require("../models/Table");


router.post("/restaurant/:id", (req, res, next) => {
  console.log(req.body, req.params.id)
  User.findById(req.params.id)
    .then(thisUser => {

      newTable = new Table();
      newTable.user = req.user._id;
      newTable.restaurant = thisUser._id;
      newTable.name = req.body.name;
      newTable.chairs= req.body.chairs;
      newTable.pedido = req.body.pedido;
      newTable.isAvailable= req.body.isAvailable;
      newTable.status =req.body.status;
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

module.exports = router