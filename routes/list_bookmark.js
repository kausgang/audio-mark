var express = require("express");
var router = express.Router();

const fs=require('fs')


/* GET home page. */
router.get("/", function (req, res, next) {
  const filename = req.query.filename;
  const full_filename='./public/AUDIO/'+filename+".txt"
  // console.log(filename);

  //READ CSV FILE WITH FILENAME.txt AND CONVERT INTO JSON. LATER SEND WITH BELOW CODE
  let bookmark_content;
 
  fs.readFile(full_filename, 'utf8', function (err, data) {
    var dataArray = data.split(/\r?\n/);  //Be careful if you are in a \r\n world...
    // Your array contains ['ID', 'D11', ... ]
    console.log(dataArray)
    res.send(JSON.stringify(dataArray));
  })

  // bookmark_content=fs.readFileSync(full_filename,{encoding:'utf8'})
  // console.log(bookmark_content)

  // setTimeout(() => {
    // res.send(JSON.stringify(data));
  // }, 2000);
  
});

module.exports = router;
