var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let filename = req.query.filename;
  // console.log(filename);

  //READ CSV FILE WITH FILENAME.txt AND CONVERT INTO JSON. LATER SEND WITH BELOW CODE
  res.send({ title: "GeeksforGeeks" });
});

module.exports = router;
