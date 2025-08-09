
function reverseAString(inputString) {
    // if(typeof inputString !== 'String'){
    //     throw new Error("only string are a allowed");
    // }

//   console.log(typeof inputString);

    let result = "";
    for(let i = inputString.length- 1; i >= 0; i--) {
        // console.log(inputString[i]);
        result = result + inputString[i];

    }
       return result;

       function reverseString2(inputString) {
        const splittedInput =inputString.split('');
        console.log(splittedInput);
       }
    
}
console.log(reverseAString("Puneet"));
console.log(reverseAString("Software development"));

console.log("reverseAString2")
console.log(reverseAString("Puneet"));