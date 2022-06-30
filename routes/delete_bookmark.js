var express = require("express");
var router = express.Router();

var replace = require("replace");

var fs = require("fs");

router.post("/", function (req, res, next) {
  let filename = req.body.filename;
  let old_bookmark_name = req.body.old_bookmark_name;
  let new_bookmark_name = req.body.new_bookmark_name;

  console.log(filename, old_bookmark_name, new_bookmark_name);

  replace({
    regex: old_bookmark_name,
    replacement: new_bookmark_name,
    paths: ["./public/AUDIO/" + filename + ".txt"],
    // recursive: true,
    silent: false,
  });

  res.sendStatus(200);
});

module.exports = router;
