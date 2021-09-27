const jwt = require('jsonwebtoken');
require('dotenv').config()

const accessTokenGenerator = function(userid){
return tokenGenerate('30d',userid)
}


const refreshTokenGenerator = function(userid){
    return tokenGenerate('180',userid)
    }

function tokenGenerate(days,userid){
    let body = {'userid':userid}
    let options = {expiresIn:days}
    let accessToken = jwt.sign(body,process.env.TOKENHASH,options)
    return accessToken
}

function getTokenObject(userid){
    let accesToken = accessTokenGenerator(userid)
    let refreshToken = refreshTokenGenerator(userid)
    let tokens = {access:accesToken,refresh:refreshToken}
    return tokens
}


module.exports = {accessTokenGenerator,refreshTokenGenerator,getTokenObject}