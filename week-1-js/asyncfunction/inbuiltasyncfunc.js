

const fs = require('fs');       // javascript library for reading and writing files
//filesystem module

fs.readFile("input.txt", "utf-8", function(err ,data){
    console.log(data);
})