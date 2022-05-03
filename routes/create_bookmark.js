var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // ENTER ADDING BOOKMARK LOGIC HERE (FS OPERATIONS)
  res.sendStatus(200);
});

module.exports = router;
