const userCtrl = require("../controllers/userController");
//.. to exit the roue
//. same route
const express = require("express");

const route = express.Router();
route.get("/roll/:roll",userCtrl.getUserByRoll);
module.exports = route;