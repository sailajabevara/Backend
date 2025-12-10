// const express = require("express");
// const userCtrl = require("../controllers/userController")
// const route = express.Router();

// route.post("/add", userCtrl.adduser);
// route.get("roll/:roll",userCtrl.getUserByRoll);

// module.exports = route;

// routes/userRoutes.js

// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userController");

router.post("/add", userCtrl.addUser);     // <-- POST method here
router.get("/roll/:roll", userCtrl.getUserByRoll);

module.exports = router;
