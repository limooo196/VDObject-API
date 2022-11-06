const express = require("express");
const objectController = require("../controllers/objectController");
const router = express.Router();

router.route("/:keyId").get(objectController.getByKeyId);

router.route("/").get(objectController.getAll).post(objectController.createNewVDObject);

module.exports = router;
