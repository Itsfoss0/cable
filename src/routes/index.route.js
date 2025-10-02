const controller = require("../controllers/entrypoint.controler");
const router = require("express").Router();

router.get("/", controller.indexPointControllerFunction);
router.get("/status", controller.statusControllerFunction);

module.exports = router;
