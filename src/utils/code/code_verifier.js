const Verification = require('../../models/verification')

async function isCodeValid (mail,code){
    const verification = await Verification.findOne({code:code.toString(),mail:mail.toString()})
    console.log(verification)
    if(verification){
        verification.remove()
        return true
    }else{
        return false
    }
   
}

module.exports = isCodeValid