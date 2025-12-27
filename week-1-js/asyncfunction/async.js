//synchronous functions are the ones which executes program tasks one after another and only one thing at a time
//asynchronus function are the ones which executes its program by context switchng or delegate tasks.

//lets take async function ( settimeout)

function findsum(n){
    let ans = 0;
    for(i=0 ; i<n ;i++){
        ans = ans + i;
    }
    return ans;
}

function findsumtill100(){
   console.log(findsum(100));
}

setTimeout(findsumtill100, 1000);     //here settimeout has been called after 1000 millisec so this is async function as it is contextt switching here
console.log("hello world");     // first this will get executed

