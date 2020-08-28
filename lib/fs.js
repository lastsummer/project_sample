const fs = require('fs');



exports.mkdirSync = (dir) =>{
  fs.mkdirSync(dir)
}

exports.readFile = (file) =>{
  fs.readFile(file,'utf-8', function(err,data){
    if(err){
     console.log(err)
    }else{
     return data
    }
  })
}