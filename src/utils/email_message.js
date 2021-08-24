function message (to,code){
  const msg = {
      to: to, 
      from: 'canergsan@gmail.com', // Later on we'll be sending from our domain, noreply@matchify.com
      subject: 'Matchify Verification Code',
      text: 'Hi , this is a test mail coming from Matchify',
      html: `<p>Hi ! Thank you for registering Matchify !</p> <p>Here is your verification code : <strong>${code}</strong></p>`,
    }
    return msg
}

module.exports=message