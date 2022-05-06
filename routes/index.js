var express = require('express');
var router = express.Router();
let fs =require('fs')
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {

  const EXTENSION = '.mp3';

  // const dirpath = path.join(__dirname, '../public/AUDIO')
  const dirpath = "./public/AUDIO"
  
 
  // fs.readdirSync(dirpath, function(err, files) {
  //   const mp3Files = files.filter(el => path.extname(el) === '.mp3')
  //   // do something with your files, by the way they are just filenames...

  //   console.log("in ete")
  // })

  fs.readdirSync(dirpath,(err,files)=>{
    const mp3Files = files.filter(el => path.extname(el) === '.mp3')
    console.log(mp3Files)
  })

  res.render('index', { title: 'Express' });
});

module.exports = router;
