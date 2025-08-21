
// function reverseAString(inputString) {
//     // if(typeof inputString !== 'String'){
//     //     throw new Error("only string are a allowed");
//     // }

// //   console.log(typeof inputString);

//     let result = "";
//     for(let i = inputString.length- 1; i >= 0; i--) {
//         // console.log(inputString[i]);
//         result = result + inputString[i];

//     }
//        return result;

//        function reverseString2(inputString) {
//         const splittedInput =inputString.split('');
//         console.log(splittedInput);
//        }
    
// }
// console.log(reverseAString("Puneet"));
// console.log(reverseAString("Software development"));

// console.log("reverseAString2")
// console.log(reverseAString("Puneet"));


// 1. Sum of Even Numbers using filter() and reduce()

const arr = [1,2,3,4,5,6];
const evanSum = arr.filter(num => num % 2 === 0)
reduce((sum, val) => sum + val , 0);
console.log(evanSum);