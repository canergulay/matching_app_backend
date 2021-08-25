const User = require('../../models/user')

async function mailCacher(mail){
    const mailToBeCached = new User({mail:mail})
    await mailToBeCached.save()
}

module.exports = mailCacher