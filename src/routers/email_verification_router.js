const sgMail = require('@sendgrid/mail')
const message = require('../utils/email_message')


async function sendmail(req,res){
    const apiKEY = process.env.SENDGRID_API_KEY
    // We will use SendGrid's email sending API, it will cost 30 dollars for 100.000 emails sent.
    // 100.000 users means hundred of dollars, 30 dollars is acceptable for that service.
    sgMail.setApiKey(apiKEY)
    let to = req.body.to

      sgMail
        .send(message(to))
        .then(() => {
          console.log('Email sent')
          res.send('success')
        })
        .catch((error) => {
          console.error(error)
        })
    
}

async function verifymail(req,res){

}


module.exports={sendmail,verifymail}