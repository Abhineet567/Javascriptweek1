// Date                 //Date function is actually a class given in javascript so user can use it directly we can create an object out of that

const currentdate = new Date();

console.log(currentdate.getDate());             //Date is a class in which getDate is a function which we are accessing through currentdate object
console.log(currentdate.getFullYear());         //Date is a class in which getFullYear is a function which we are accessing through currentdate object
console.log(currentdate.getDay());              //Date is a class in which getDay is a function which we are accessing through currentdate object
console.log(currentdate.getHours());            //Date is a class in which getHours is a function which we are accessing through currentdate object
console.log(currentdate.getMonth());            //Date is a class in which getMonth is a function which we are accessing through currentdate object


// setting components of the date

currentdate.setFullYear(2022);
console.log("after set full year" ,currentdate);

currentdate.setMonth(5);
console.log("after set month" ,currentdate);


console.log("time in millisecond since 1970:",currentdate.getTime());     //this will always give time in millisecond since 1970 taken as a base year for Date class