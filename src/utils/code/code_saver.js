const Verification = require('../../models/verification')

async function codeSaver(code,to) {
const verification = new Verification({code:code,mail:to})
 verification.save()
}

module.exports = codeSaver