const router = require("express").Router();
const userRoute = require("./user");
const catRoute = require("./cats");

// User routes
router.use("/user", userRoute);
router.use("/cats", catRoute);

module.exports = router;