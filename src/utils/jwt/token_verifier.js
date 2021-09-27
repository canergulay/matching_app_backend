const jwt = require('jsonwebtoken');
require('dotenv').config()

const tokenVerifier = function(token){
    return jwt.verify(token)
}

module.exports = tokenVerifier