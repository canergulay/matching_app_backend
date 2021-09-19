const User = require('../../models/user')
const hasher = require('../../utils/user/hasher')
const userConverters = require('../../utils/user/user_converters')

async function register(req,res){
    
    let password = req.body.password
    console.log('current password : '+password)
    let hashedPasword = await hasher.hashPassword(password)
    console.log('hashed password : '+hashedPasword)


    var userToRegister = User({
        username:req.body.name,
        usermail:req.body.email,
        password:hashedPasword,
        studycode:userConverters.studyCodeConverter(req.body.studycode),
        fos:req.body.fieldOfStudy,
        gender:userConverters.genderConverter(req.body.genderType),
        birthday:req.body.birthday,
        interestedin:userConverters.interestedInConverter(req.body.interestedIns),
        interests:[1,2],//DÜZELT
        images:req.body.photoURLS,
    })
    await userToRegister.save()
    res.send({'status':'success','user':userToRegister})
}

module.exports = register