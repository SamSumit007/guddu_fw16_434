function sum(a,b){
    if(typeof a == "string" && typeof b == "string"){
        return;
    }
    return a+b;
}

function multiply(a,b){
    return a*b;
}

module.exports  = {sum,multiply}
// console.log(sum(1,5));