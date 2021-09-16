const SubInterest = require('../models/subinterest') 
const InterestIdRepo = require('../utils/interest_id_repo')

async function interests(req,res) {
    try{
        console.log('istek geldi')
        console.log(req.body)
      let interestType = req.body.type!=null?req.body.type:''
      let subInterests = await getSubInterests(interestType)
      console.log(subInterests)
      res.send(subInterests)
    }catch(e){
        res.status(500).send('problem')
    }
}



async function getSubInterests(type){
    switch(type) {
        case 'sports':  
         return await SubInterest.find({'interest':InterestIdRepo.SPORTS})
        case 'onlinegames':
          return await SubInterest.find({'interest':InterestIdRepo.ONLINEGAMES})
        case 'languages':
          return await SubInterest.find({'interest':InterestIdRepo.LANGUAGES})
        case 'pets':
          return await SubInterest.find({'interest':InterestIdRepo.PETS})
    }
}

module.exports = interests