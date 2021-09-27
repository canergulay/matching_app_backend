const User = require('../../models/user')
const hasher = require('../../utils/user/hasher')
const tokenGenerators = require('../../utils/jwt/token_generators')
async function login(req,res){
    
   try{
    let email = req.body.email
    let password = req.body.password

    let user = await User.findOne({usermail:email})
    
    let tokens = tokenGenerators.getTokenObject(user._id)
    if(!user){
        res.send({'status':13,'user':user,'tokens':tokens})
    }else{
        let passwordsMatch = await hasher.comparePasswords(password,user.password)
        if(passwordsMatch){
            res.send({'status':1})
        }else{
            res.send({'status':12})
        }
    }
   }catch(e){
    res.status(500).send('Houston we got a problem!')
   }

}

module.exports = login