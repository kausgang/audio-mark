var express = require("express");
var router = express.Router();

var fs = require("fs");
var path = require("path");

const DESTINATION_FOLDER = "./public/BOOKMARKS";
fs.exists(DESTINATION_FOLDER, function (exists) {
  if (exists) {
    // console.log(exists)
  } else {
    console.log("creating folder");
    fs.mkdir(DESTINATION_FOLDER, function (err) {
      if (err) console.log(err);
    });
  }
});

router.post("/", function (req, res, next) {
  let filename = req.body.filename;
  let bookmark_name = req.body.bookmark_name;

  // let full_filename = path.join(DESTINATION_FOLDER, filename + ".txt");
  let full_filename = "dsda.txt";
  // ENTER ADDING BOOKMARK LOGIC HERE (FS OPERATIONS)

  if (fs.existsSync("./public/BOOKMARKS/" + filename + ".txt")) {
    fs.appendFile(
      "./public/BOOKMARKS/" + filename + ".txt",
      bookmark_name,
      function (err) {
        if (err) throw err;
        console.log("Saved!");
      }
    );
  } else {
    fs.writeFileSync(
      "./public/BOOKMARKS/" + filename + ".txt",
      bookmark_name + "\n"
    );
  }

  res.sendStatus(200);
});

module.exports = router;
