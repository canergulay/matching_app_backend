const User = require('../../models/user')
const hasher = require('../../utils/user/hasher')

async function login(req,res){
    
   try{
    let email = req.body.email
    let password = req.body.password

    let user = await User.findOne({usermail:email})
    
    if(!user){
        res.send({'status':13,'user':user})
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