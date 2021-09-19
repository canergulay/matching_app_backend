function studyCodeConverter(studycode){
    switch (studycode) {
        case 'hs':
            return 0
        case 'undergrad':
            return 1    
        case 'grad':
            return 2
        case 'doctorate':
            return 3    
        case 'working':
            return 4                
    }
}

function genderConverter(gender){
    if(gender == "MAN"){
        return 0
    }else if(gender == "WOMAN"){
        return 1
    }
}

function interestedInConverter(interestedIns){

    var listToReturn = []

    for (const element of interestedIns) {
        console.log(element)
          listToReturn.push(genderConverter(element))
        }
        return listToReturn
}

module.exports = {studyCodeConverter,genderConverter,interestedInConverter}