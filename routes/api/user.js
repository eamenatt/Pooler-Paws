const router = require("express").Router();
const userController = require("../../controllers/userController");
const auth = require("../../middleware/auth");

router.route("/").get(auth, userController.getUser);

router.route("/register").post(userController.register);

router.route("/login").post(userController.login);

router.route("/validate").post(userController.valid);

router.route("/update/:userId").put(userController.addFavorite);

router.route("/delete").delete(auth, userController.delete);

router.route("/favorites/:userId").get(userController.getFavorites);

router.route("/update/:userId").put(userController.addCreated);

router.route("/favorites/:userId").get(userController.getCreated);

module.exports = router;