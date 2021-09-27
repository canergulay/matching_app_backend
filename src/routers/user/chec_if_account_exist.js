const User = require('../../models/user')
const tokenGenerators = require('../../utils/jwt/token_generators')

async function checkIfAccountExist(req,res){
    
   try{
    let usermail = req.body.email
    console.log(usermail)
    let user = await User.findOne({usermail})
    let tokens = tokenGenerators.getTokenObject(user._id)

    if(user){
        res.send({'status':true,'user':user,'tokens':tokens})
    }else{
        res.send({'status':false})
    }
   }catch(e){
    console.log(e)
    res.status(500).send('problem')
   }
}

module.exports = checkIfAccountExist