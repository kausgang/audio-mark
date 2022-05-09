var express = require("express");
var router = express.Router();

const fs = require('fs')


/* GET home page. */
router.get("/", function (req, res, next) {
  const filename = req.query.filename;
  const full_filename = './public/AUDIO/' + filename + ".txt"

  // console.log("from router/list_bookmark.js "+full_filename)

  //READ CSV FILE WITH FILENAME.txt AND CONVERT INTO JSON. LATER SEND WITH BELOW CODE
  // let bookmark_content;

  if (fs.existsSync(full_filename)) {

    // if bookmark file fs.exists, read bookmark values
    fs.readFile(full_filename, 'utf8', function (err, data) {
      var dataArray = data.split(/\r?\n/);  //Be careful if you are in a \r\n world...
      // Your array contains ['ID', 'D11', ... ]
      // console.log(dataArray)
      res.send(JSON.stringify(dataArray));
    })

  }


});

module.exports = router;
