const multer = require('multer')

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'assets/user/images');
    },
    filename: function(req, file, cb) {
      cb(null, randomIntFromInterval(1,1000000) + '-' + Date.now() + '.jpg');
    }
  });
  
  var upload = multer({ storage: storage });
  
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


  function splitEmail(email){
    const address = email.split('@')
    return address[0]
  }

  module.exports = upload