var express   = require('express');
var router    = express.Router();
var upload    = require('./upload');
var mongoose  = require('mongoose');
var photo     = require('../models/Photo')
var Photo     = mongoose.model('Photos');
var spawn     = require("child_process").spawn;
var fs = require('fs');
//var fullPath =''; 


/* GET home page. */
router.get('/', function(req, res, next) {

  Photo.find({}, ['path','caption'], {sort:{ _id: -1} }, function(err, photos) {
    res.render('index', { title: 'Image Classification with Inception, NodeJS, mongoDB', msg:req.query.msg, photolist : photos });
    
  });

});

/** Upload file to path and add record to database */

router.post('/upload', function(req, res) {

  upload(req, res,(error) => {
      if(error){
         res.redirect('/?msg=3');
      }else{
        if(req.file == undefined){
          
          res.redirect('/?msg=2');

        }else{
             
            /**
             * Create new record in mongoDB
             */
            fullPath = "files/"+req.file.filename;

            var document = {
              path:     fullPath, 
              caption:   req.body.caption
            };
  
          var photo = new Photo(document); 
          photo.save(function(error){
            if(error){ 
              throw error;
            };
            // res.redirect('/test');
            var pyProg = spawn('python', ['./MLmodel/inception_client.py', '--server=35.202.216.34:9000', '--image=' + './public/' + fullPath]);
            pyProg.stdout.on('data', function (data) {
            res.send(data.toString());
          });

          });
      }
    }
  });    
});


// router.get('/images/:id', function(req, res) {
 
// //calling the function from index.js class using routes object..
// photo.getImageById(req.params.id, function(err, genres) {
//   if (err) {
//     throw err;
//   }

//   var result = './public/' + genres.path;

//   if (fs.existsSync(result)) {

//     var pyProg = spawn('python', ['./MLmodel/inception_client.py', '--server=35.224.246.197:9000', '--image=' + result]);
//     pyProg.stdout.on('data', function (data) {
//     res.send(data.toString());
//   });
//     } else {
//       res.send('Image path Not Found');
//   };

// });

// });



// router.get('/test', function(req, res) {


//     var pyProg = spawn('python', ['./MLmodel/inception_client.py', '--server=35.224.246.197:9000', '--image=' + './public/' + fullPath]);
//     pyProg.stdout.on('data', function (data) {
//     res.send(data.toString());
//   });

// });




module.exports = router;
