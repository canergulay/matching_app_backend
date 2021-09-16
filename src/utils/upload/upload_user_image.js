const multer = require('multer')

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'user/images');
    },
    filename: function(req, file, cb) {
      cb(null, splitEmail(req.user.email) + '-' + Date.now() + '.jpg');
    }
  });
  
  var upload = multer({ storage: storage });
  
  function splitEmail(email){
    const address = email.split('@')
    return address[0]
  }

  module.exports = upload