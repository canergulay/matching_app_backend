const jwt = require('jsonwebtoken');
require('dotenv').config()

const accessTokenGenerator = function(userid){
return tokenGenerate('30d')
}


const refreshTokenGenerator = function(userid){
    return tokenGenerate('180')
    }

function tokenGenerate(days){
    let body = {'userid':userid}
    let options = {expiresIn:days}
    let accessToken = jwt.sign(body,process.env.TOKENHASH,options)
    return accessToken
}

module.exports = {accessTokenGenerator,refreshTokenGenerator}