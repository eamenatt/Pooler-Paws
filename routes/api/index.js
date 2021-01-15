const router = require("express").Router();
const userRoute = require("./user");
const catRoute = require("./cat");

// User routes
router.use("/user", userRoute);
router.use("/cat", catRoute);

module.exports = router;