function findsum (arr) {
    let sum = 0; // step 1: Initialize sum to 0
    for(i = 0; i < arr.length; i++){
    sum += arr[i]; // Stpe 2: Add each element to sum
}
 return sum; // step 3; Return the final sum
}
let numbers = [10, 20, 30, 40];
console.log("Total sum is: ", findsum(numbers));