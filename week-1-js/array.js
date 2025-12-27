
// push ,pop , unshift , shift ,concate , foreach , map , filter , find , short

const initialarray = [1,2,3,4];
initialarray.push(5);
initialarray.pop(2);
initialarray.unshift(1);
initialarray.shift();
console.log(initialarray);

//concate

const array1 = [2,34,4];
const array2 = [3,3,4];
console.log(array1.concat(array2));


//for each

const initialarray2 = [2,3,4,5,6];
function logthing(str){
    console.log(str);
}
initialarray2.forEach(logthing)   //for every elemnt of array it will call function logthing 




