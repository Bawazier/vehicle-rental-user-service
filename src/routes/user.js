const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

router.get("/", userController.getAllUser);
router.get("/:id", userController.getUserById);
router.patch("/", userController.updateUserbyToken);
router.patch("/:id", userController.updateUserbyParams);
router.delete("/:id", userController.deleteUser);

module.exports = router;