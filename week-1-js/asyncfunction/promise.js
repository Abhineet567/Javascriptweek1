const fs = require('fs');
 
//my own asyncronous function
function kiratReadFile(){
    return new Promise(function(resolve){               // inside prommise  //making instance (object) of promise class and return it
        fs.readFile('input.txt', "utf-8" , function(err, data){
            resolve(data);      //resolve peromise and pass it to kiratreadfile             //resolve data
        })
    })
}

//callback function  to call
function onDone(data){
    console.log(data)
}

kiratReadFile().then(onDone);