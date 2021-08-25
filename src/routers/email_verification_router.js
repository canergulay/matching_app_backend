
//CORE
const sgMail = require('@sendgrid/mail')
const message = require('../utils/email_message')
//

//UTILS USED IN THIS PAGE//
const codeGenerator = require('../utils/code/code_generator')
const codeSaver = require('../utils/code/code_saver')
const isCodeValid = require('../utils/code/code_verifier')

async function sendmail(req,res){

    try{
      const apiKEY = process.env.SENDGRID_API_KEY
      // We will use SendGrid's email sending API, it will cost 30 dollars for 100.000 emails sent.
      // 100.000 users means hundred of dollars, 30 dollars is acceptable for that service.
      sgMail.setApiKey(apiKEY)
     
      let to = req.body.email
      let codeToSend = codeGenerator()
      
      sgMail
          .send(message(to,codeToSend))
          .then(() => {
            codeSaver(codeToSend,to).then(()=>{
              res.send('success')
             
              // if user verifies mail, we will cache it.
            }).catch((error)=>{
              res.status(500).send('we got a problem..')
              console.error(error)
            })
          })
          .catch((error) => {
            res.status(500).send('we got a problem..')
            console.error(error)
          })
      
    }catch(error){
    
      res.status(500).send('we got a problem..')
      console.error(error)
    }
}

async function verifymail(req,res){
  
  
  const usersMail = req.body.email
  const usersCode = req.body.code
   isCodeValid(usersMail,usersCode).then((isValid)=>{
    if(isValid){
      console.log('yeah they are valid')
      res.send('success')
    }else{
      console.log('no ! they are not at all !')
      res.status(500).send('problem')
    }
   }).catch((error)=>{
     console.log('problem de yok değil.')
     console.log(error)
    res.status(500).send('problem')
   })

  

}


module.exports={sendmail,verifymail}