const router = require("express").Router();
const catsController = require("../../controllers/catsController");

// Matches with "/api/cat"
router.route("/")
  .get(catsController.findAll)
  .post(catsController.create);

// Matches with "/api/cat/:id"
router
  .route("/:id")
  .get(catsController.findById)
  .put(catsController.update)
  .delete(catsController.remove);

module.exports = router;
