const bcrypt = require('bcryptjs')

async function hashPassword(password){
    if(password == 'registeredviagoogle' || password == 'registeredviafacebook'){
        return password
    }else{
        return await bcrypt.hash(password, 8)
    }
}

async function comparePasswords(password1,password2){
    return await bcrypt.compare(password1,password2)
}





module.exports = {hashPassword,comparePasswords}