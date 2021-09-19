async function imageupload(req,res){
    console.log('deneme')
    console.log(req.file.filename)
    let responseObject = {
        "status":"success",
        "image":req.file.filename
    }
    setTimeout(function(){ res.json(responseObject) }, 3000);
    
}

module.exports = imageupload