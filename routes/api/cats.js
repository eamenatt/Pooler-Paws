const router = require("express").Router();
const catsController = require("../../controllers/catsController");
const auth = require("../../middleware/auth");

// Matches with "/api/cat"
router.route("/")
  .get(catsController.findAll)
  .post(auth, catsController.create);

// Matches with "/api/cat/:id"
router
  .route("/:id")
  .get(catsController.findById)
  .put(auth, catsController.update)
  .delete(auth, catsController.remove);

module.exports = router;
