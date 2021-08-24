function generateCode(){
    let code = Math.floor(Math.random()*90000) + 10000;
    return code
}

module.exports = generateCode