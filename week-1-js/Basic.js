//Const , let , var , loops , for loops, functions , callback functions , Anoymous function , if else consditions , objects , Array of objects


console.log("abhi signh");
//var a =1 ;
//console.log(a);
let a=2 ;
a=4
console.log(a);

let firstname = "abhineet";
let age = 23 ;
let ismarried = true;

console.log("first name is " + firstname + " age is " + age + "is married" + ismarried) ;


//if-else conditional statement
if (ismarried == true){
    console.log(firstname + " is married");
}
else{
        console.log(firstname + " is not  married");

}

//for loop (iteration)

ans = 0;

for(i=0 ; i<=1000 ; i=i+1){
    ans = ans + i;
}
console.log(ans);

//arrays

const ages = [21,22,23,24,25,26,27];

for(let i=0 ; i<ages.length ; i++){
    if(ages[i]%2 == 0){
        console.log(ages[i]);
    }
}

//objects

const fruits = {
    fruitname : "chiku",
    taste : "good",
}
    console.log(fruits["fruitname"]);


//Arrays of object

const allusers = [{
    firstname : "abhineet",
    gender : "male"
},{
    firstname : "akashy",
    gender : "male"
},{
    firstname : "raj",
    gender : "female"
}]

for(i=0 ; i<allusers.length ; i++){
    if(allusers[i]["gender"] == "male"){
        console.log(allusers[i]["firstname"]);
    }

}


//function 

function findsum(a,b){
    return a+b;
}
ans = findsum(2,3);   //function call
console.log(ans);



//function callbacks

function sum(a,b,fnresult){
    let result = a+b;
    fnresult(result);

}
function activeresult (data){
    console.log("the result value is :" + data);
}
function passiveresult (data){
    console.log("result is: "+ data);

}

const value = sum(1,2,passiveresult);


//normal function inside function

function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumofsquare(a,b){

    const val1 = square(a);
    const val2 = square(b);
    return val1 + val2;
}

function sumofcube(a,b){
    const val1 = cube(a);
    const val2 = cube(b);
    return val1 + val2;
}

const ans22 = sumofsquare(2,3);
const ans13 = sumofcube(2,2);
console.log(ans22);
console.log(ans13);



//the above can can written as in less code in callback function form

function square1 (n){
    return n*n;
}

function sumofanything(a,b,fn){   //here we are passing function as an arguments so ccalled callback
    val11 = fn(a);
    val33 = fn(b);
    return val11+val33;
}

const result1 = sumofanything(2,3,square1);    //fn is assumes as another name for sqaure1 as memorization.  //most time we write callbcak or cb instead of fn in callbacks
console.log(result1);



//Anonymous function

function square13 (n){
    return n*n;   //we have passed this function whole as argument in result11 without name square13 so this is called anonymous means without name of a function
}                   // we can check it by console.log(callback)

function sumofanything(a,b,callbak){   
    console.log(a);
    console.log(b);

    console.log(callbak);

    val11 = callbak(a);
    val33 = callbak(b);
    return val11+val33;
}

const result11 = sumofanything(4,6,function(n){    // whenever me put function directly or natively inside argument it is called anonymous funvtion.
    return n*n;
});    
console.log(result11);




