const router = require("express").Router();
const catRoutes = require("./cats");

// Cat routes
router.use("/cats", catRoutes);

module.exports = router;
