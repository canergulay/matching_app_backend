const User = require('../../models/user')

async function cacheController(mail){
    const user = await User.findOne({mail:mail})
    return user
}

module.exports = cacheController