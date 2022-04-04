const { route } = require("express/lib/application");
var auth = require("../middlewares/auth.middleware");

module.exports = (app) => {

var users =  require("../controllers/user.controller");
var router = require('express').Router();

router.post("/sign-up", users.create);
router.post("/sign-in", users.signin);
router.route("/profile").get(auth, users.profile);

app.use("/users", router);

}