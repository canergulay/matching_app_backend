async function sendSMS(req,res) {
    res.send('this is sendsms')
}

async function verifySMS(req,res) {
    res.send('this is verifysms')
}

module.exports={sendSMS,verifySMS}