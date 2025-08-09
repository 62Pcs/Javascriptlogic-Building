function checkifEvenodd(a){
    const remainder =a % 2;
    if(remainder === 0) {

    }
    else{
        return "odd";
    }
}

console.log(checkifEvenodd(-2));
console.log(checkifEvenodd(13));
console.log(checkifEvenodd(101.5));
console.log( "0 is " ,checkifEvenodd(0));
console.log( "2 is " ,checkifEvenodd(2));
console.log( "-1 is " ,checkifEvenodd(-1));
console.log( "500 is " ,checkifEvenodd(500));






