function message (to){
    const msg = {
        to: to, 
        from: 'canergsan@gmail.com', // Later on we'll be sending from our domain, noreply@matchify.com
        subject: 'Matchify Verification Code',
        text: 'Hi , this is a test mail coming from Matchify',
        html: '<strong>lets test html functionality</strong>',
      }
      return msg
}

module.exports=message