var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");

const dirpath = "./public/AUDIO";

filenames = fs
  .readdirSync("./public/AUDIO")
  .filter((el) => path.extname(el) === ".mp3");

console.log(filenames);

/* GET home page. */
router.get("/", function (req, res, next) {
  const EXTENSION = ".mp3";

  // const dirpath = path.join(__dirname, '../public/AUDIO')

  //

  res.render("index", { title: "Express", filename: filenames });
});

module.exports = router;
