const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const homeRoutes = require("./homeRoutes");
router.use("/", apiRoutes);
router.use("/", homeRoutes);
module.exports = router;
