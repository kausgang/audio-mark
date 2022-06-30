var express = require("express");
var router = express.Router();

var replace = require("replace");

var fs = require("fs");

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

router.post("/", function (req, res, next) {
  let filename = req.body.filename;
  let old_bookmark_name = req.body.old_bookmark_name;

  fs.readFile(
    "./public/AUDIO/" + filename + ".txt",
    "utf8",
    function (err, data) {
      if (err) {
        // check and handle err
      }
      // data is the file contents as a single unified string
      // .split('\n') splits it at each new-line character and all splits are aggregated into an array (i.e. turns it into an array of lines)
      // .slice(1) returns a view into that array starting at the second entry from the front (i.e. the first element, but slice is zero-indexed so the "first" is really the "second")
      // .join() takes that array and re-concatenates it into a string
      // console.log(data.split("\n"));
      // let indexofBookmark = data.split("\n").indexOf(old_bookmark_name);
      // console.log("index is - " + indexofBookmark);
      let new_content = removeItemOnce(
        data.split("\n"),
        old_bookmark_name
      ).join("\n");

      // console.log(new_content);

      fs.writeFile(
        "./public/AUDIO/" + filename + ".txt",
        new_content,
        function (err, data) {
          if (err) {
            /** check and handle err */
          }
        }
      );
    }
  );

  res.sendStatus(200);
});

module.exports = router;
