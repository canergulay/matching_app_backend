const User = require('../../models/user')
const hasher = require('../../utils/user/hasher')
const userConverters = require('../../utils/user/user_converters')

async function register(req,res){
    var userToRegister = await userModelParser(req.body)
    await userToRegister.save()
    res.send({'status':'success','user':userToRegister})
}

const userModelParser = async function(body) {
    let password = body.password
    let hashedPasword = await hasher.hashPassword(password)
    return User({
        username:body.name,
        usermail:body.email,
        password:hashedPasword,
        studycode:userConverters.studyCodeConverter(body.studycode),
        fos:body.fieldOfStudy,
        gender:userConverters.genderConverter(body.genderType),
        birthday:body.birthday,
        location:latLongConverter(body.location.coordinates),
        interestedin:userConverters.interestedInConverter(body.interestedIns),
        interests:[1,2],//DÜZELT
        images:body.photoURLS,
    })
}


const latLongConverter= function(coordinates){
    console.log(coordinates)
    var locObject = {
        type:'Point',
        coordinates:coordinates
    }
    console.log(locObject)
    return locObject
}


module.exports = register