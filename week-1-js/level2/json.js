//json.parse
//json.stringfy

const user = {
    name : "abhineet",
    gender : "male"
}

const finalstring = JSON.stringify(user)   //json.stringfy would convert js object into string
console.log(finalstring);


// converting finalstring into object called finalobject

const finalobject = JSON.parse(finalstring)    //json.parse will convert string into js object
console.log(finalobject);