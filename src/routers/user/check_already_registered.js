const User = require('../../models/user')

async function checkAlreadyRegistered(req,res){
   try{
    let usermail = req.body.email
    console.log(usermail)
    let user = await User.findOne({usermail})
    if(user){
        res.send({'status':true})
    }else{
        res.send({'status':false})
    }
   }catch(e){
    res.status(500).send('problem')
   }
}

module.exports = checkAlreadyRegistered