const router = require("express").Router();
const userRoute = require("./user");
const catRoute = require("./cats");
const sendRoute = require("./send");

// User routes
router.use("/user", userRoute);
router.use("/cats", catRoute);
router.use("/send", sendRoute);

module.exports = router;