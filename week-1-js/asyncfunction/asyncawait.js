function kiratasyncfunction(){
    let p = new Promise(function(resolve){
        //do some async logic here

        resolve("Hi there")
    });
    return p;
}

async function main() {     //any function that want to use await should be async function
    const value = await kiratasyncfunction();       //rather than using the .then syntax we add await before and get the final value in the variable
    console.log(value);
                                // async , await always declared in the function call side not in declaration side
}

main();