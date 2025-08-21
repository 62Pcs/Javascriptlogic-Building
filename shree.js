// // Number to String
// let num  = 10;
// let str = string(num);

const { use, cloneElement } = require("react");

// // String to Number
// let value = "123";
// let numVal = Number(value);

// console.log(Boolean(0));
// console.log("");
// console.log("h1");

// //parseInt / parseFloat

// let x = parseInt("45.67");
// let y = parseFloat("47 . 67");

// {
// var a=20;

// }

// {

// console.log(a);

// }

// let age = prompt('How old are you?', 100);

// alert(`You are ${age} years old!`);

// Example 1: Grade Checker

// let marks = 85;

// if(marks >= 90){
//     console.log("Grade: A+");
// } else if(marks >= 80) {
//     console.log("Grade: A");

// }else if(marks >= 70) {
//     console.log("Grade: B");
// }else {
//     console.log("Grade: c or below");
// }

// let marks = 70;
// if(marks >= 80) {
//     console.log("Grade: +A");

// } else if(marks >= 75) {
//     console.log("Grade: A");

// } else if(marks >= 70) {
//     console.log("Grade: +B");
// }else if(marks >= 60){
//     console.log("Grade: B");
// } else if (marks >= 50){
//  console.log("Grade: ");
// } else {
//     console.log("marks: c or below");
// }

// Example 2: Login system

// let userName = "admin";
// let password = "1234";
// if( userName == "admin" && password == "1234"){
//     console.log("Login Successful");
// }else{
//     console.log("Invail credetials");
// }

// const  readline = require("readline");

// Sample user database (can be expanded)
// shree.js

// const readline = require("readline");

// // Create readline interface
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const users = [
//     { username: "admin", password: "1234" },
//     { username: "puneet", password: "1122" }
// ];

// rl.question("Enter username: ", function (inputUsername) {
//     rl.question("Enter password: ", function (inputPassword) {
//         const foundUser = users.find(user =>
//             user.username === inputUsername && user.password === inputPassword
//         );

//         if (foundUser) {
//             console.log("✅ Login Successful!");
//         } else {
//             console.log("❌ Invalid credentials! Try again.");
//         }

//         rl.close(); // ✅ Ye important hai
//}):
//}):

// Yeh lo pure working admin login system — terminal ke input ke liye

// const readling = require ("redline");/

// Example data

// [
//   { victim: 'React.JS', count: 2 },
//   { victim: 'Angular', count: 1 },
//   { victim: 'Vue.JS', count: 1 },
//   { victim: 'JavaScript', count: 1 }
// ]

// Step 1: Count frequency using a temporary object (map)
// let obj = {};

// for (let i = 0; i < aob.length; i++) {
//   let framework = aob[i].framework;

//   if (obj[framework]) {
//     obj[framework]++;
//   } else {
//     obj[framework] = 1;
//   }
// }
// console.log('objobjobj',obj)
// // Step 2: Convert map to required array format using proper for loop
// let result = [];
// let keys = Object.keys(obj);  // get array of unique frameworks

// console.log(obj['JavaScript'])
// for (let i = 0; i < keys.length; i++) {
//   let key = keys[i];
//   console.log('keykeykey',key)
//   result.push({ victim: key, count: obj[key] });
// }

// console.log(result);

// Question.1
// const array = [
//   { framework: 'React.JS', website: 'Paypal' },
//   { framework: 'React.JS', website: 'Tesla' },
//   { framework: 'Angular', website: 'Google' },
//   { framework: 'Vue.JS', website: 'Vue' },
//   { framework: 'JavaScript', website: 'inblack67' },
// ];

// let punit={};

// for (let i = 0; i < array.length; i++) {
//     const element = array[i].framework;

// // console.log('elementelement',element)

// if (punit[element]) {

// punit[element] +=1

// }else{

// punit[element] =1

// }

// }

// const arr=Object.keys(punit)
// const punit_proper=arr.map((ele,ind)=>({
// victim:ele,
// count:punit[ele]

// }))
// console.log('punitpunit',punit_proper)
// for (let j = 0; j < arr.length; j++) {
//     let element = arr[j];
// // console.log(element)
// rohitarr.push({'victim':element,count:punit[element]})

// }
// console.log('rohitarrrohitarrrohitarr',rohitarr)

// console.log(arr)
// "use strict"

// const { colorScheme } = require("nativewind");

// function foo() {

//     z=20
//   let x = (y = 0);
//   x++;
//   y++;
//   return x;
// }

// console.log(foo(), typeof x,  z); //  1, undefined, number

//

// Load the built-in 'fs' module (File System)
// const fs = require('fs');

// // Read content of a file (example: data.txt)
// fs.readFile('data.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File content:', data);
// });

// let data = [20,30,40,50,60,70,80];
// //  for(let i = 0; i < data.length; i++)
// //   {
// //  console.log( `Array ${i} is ${data[i]}`);
// //  }

//  let x = 4;
//  console.log(data[4]);

//  Insert Element in Array
//  let data = [20,30,45,60,70];
// let newEl = 90;
// let position = 3;
// console.log(data)
// for(let i = data.length-1; i>=0; i--){
//   // console.log(data[i])
//   if(i>position){
//     data[i + 1] = data[i];
//     if(i==position){
//       data[i].newEl;
//     }
//   }
// }
// console.log(data)

// let x = 5; // Statement 1
// let y = 6; // Statement 2
// let z = x + y; // Statement 3 (correct way)
// console.log(z); // Output: 11

// JavaScript had Global Scope and Function Scope.
// Global scope
// var name = "Puneet"; // Global variable
// function greet() {
//   console.log("Hello" + name); // Access ho gaya
// }
// greet();
// console.log(name);

// function test() {
//   var a = 10;
//   console.log(a); // ✅ Accessible inside function
// }
// test();
// console.log(a); // ❌ ReferenceError: a is not defined
// {
//   let x = 5;
//   const y = 10;
//   console.log(x, y);
// }

// console.log(x); // ❌ Error
// console.log(y); // ❌ Error

// function test() {
//   var age = 25; // Function- scoped variable
//   console.log("Inside function:" + age);
// }
// test();
// // console.log("Outside function: " + age);

//
// let text1 = "A";
// let text2 = "B";
// let result = text1 < text2;
// console.log("Is A less than B? " + result);

// let text1 = "Puneet";
// let text2 = "Singh";
// let text3 = text1 + " " + text2;
// console.log(text3);

//  1. Dot Notation (.)
// const person = {
//   name: "Punee",
//   age: 20,
//   eyeColor: "black",
//   isStundent: true,
//   city: "jaipur",
//   company: "Vigorous IT solustion",
// };
// console.log(person.name);
// console.log(person.age);
// console.log(person.eyeColor);
// console.log(person.isStundent);
// console.log(person.city);
// console.log(person.company);

//   2. Bracket Notation ([""])
// const person = {
//   name: "Puneet",
//   Phone: 8273416540,
//   city: "jaipur",
//   "home address": "Muzffernager",
// };
// console.log(person[name]);
// console.log(person[Phone]);
// console.log(person[city]);

//  let a={name:'rohit',education:'BCA',}

// output {name:'punit',education:'MCA',templeselect:false}

// let user = { user: "ravi", role: "user" };

// //output
// //{username: "ravi", role:"admin", isActive: ture}
// //Stpe:1: updata role
// user.role = "admim";
// // stpe 2: Add new property isActive
// user.isActive = true;
// console.log(user);

// let profile = {
//   name: "Amit",
//   age: 22,
//   city: "Delhi",
// };
// profile.age = "javascript";
// console.log(profile);

// Output:
// Delete age key
// Add skill: "JavaScript"

// let employee = { name: "Sita", salary: 30000 };

// // Task: Update name to "Gita", salary to 45000, and add department: "HR"
// (employee.name = "Gite"),
//   (employee.salary = 4500),
//   (employee.department = "HR");
// console.log(employee);

// let employee = { name: "Sita", salary: 30000 };

// Task: Update name to "Gita", salary to 45000, and add department: "HR"

// let book = {
//   title: "JS Basics",
//   pages: 200,
//   author: "Ankit",
// };

// for (let key in book) {
//   console.log(key + ";", book[key]);
// }

// Print all keys and values one by one using loop.

// let employee = { name: "Sita", salary: 30000 };

// Task:
// 1. name को "Gita" से update करो
// 2. salary को 45000 करो
// 3. एक नया key add करो: department: "HR"
// 4. फिर पूरा object print करो
// employee.name = "Gita";
// employee.salary = 45000;
// employee.department = "HR';";
// console.log(employee);

// Q5 (Dynamic Access Practice)

// let key = "email";
// let user = { name: "Mohan", email: "mohan@gmail.com" };

// Task:
// 1. variable `key` का use करके user object से value access करो
// 2. console में print करो
// for (let key in user) {
//   console.log(key + ";", user[key]);
// console.log(user[key]);
// }

// let student = {
//   name: "Ravi",
//   marks: {
//     maths: 90,
//     english: 85,
//     science: 88,
//   },
// };

// // ❓ Task:
// // 1. student object से total marks निकालो
// // 2. "Total marks: 263" ऐसा console में print करो
// // let totalMarks = 0;
// // for (let subject in student.marks) {
// //   console.log(student.marks[subject]);
// //   console.log("subject", subject);
// //   totalMarks += student.marks[subject];
// // }

// // console.log("Total marks: " + totalMarks);

// मान लो total marks 300 हैं (हर subject 100 marks का है), percentage भी print करो
// let percentage = (totalMarks / 300) * 100;
// console.log("percentage: " + percentage + "%");
// console.log("total marks: " + totalMarks + " out of 300");

// let totalMarks = 263; // या जो भी आपका total हो
// let percentage = (totalMarks / 300) * 100;

// console.log("Total marks: " + totalMarks + " out of 300");
// console.log("Percentage: " + percentage + "%");

// let totalMarks = 263;
// let percentage = (totalMarks / 300) * 100;
// console.log("Total marks: " + totalMarks + " out of 300");
// console.log("percentage: " + percentage.toFixed(2) + "%");
// toFixed(2);

// Q7 – Merge Two Objects

// let obj1 = { a: 1, b: 2 };
// let obj2 = { b: 3, c: 4 };

// // ❓ Task:
// // 1. इन दोनों objects को merge करो
// // 2. अगर कोई key common हो (जैसे "b"), तो obj2 की value रखी जाए
// // 3. Output होना चाहिए:
// //    { a: 1, b: 3, c: 4 }
// let mergesobject = { ...obj1, ...obj2 };
// console.log(mergesobject);

// let user = {
//   name: "Ankit",
//   age: 30,
//   city: "Delhi",
// };

// // ❓ Task:
// // 1. user object में कितनी keys हैं, वो count करो
// // 2. Output होना चाहिए:
// //    Total keys: 3
// let keycont = Object.keys(user).length;
// console.log("Total keys: " + keycont);

// let product = {
//   title: "Mobile",
//   price: 15000,
//   specs: {
//     ram: "6GB",
//     storage: "128GB",
//   },
// };

// // ❓ Task:
// // 1. storage की value access करो
// // Output: 128GB
// let storageValue = product.specs.storage;
// console.log("Storage Value: " + storageValue);

// Q10 – Find sum of all numeric values in object

//  let data = {
//   a: 10,  b: 20,
//   c: "hello",
//   d: 30,
//   e: true,
// };

// // ❓ Task:
// // Object में जितने numeric values हैं उनका total निकालो
// // Output: Total = 60
// let total = 0;
// for (let key in data) {
//   if (typeof data[key] === "number") {
//     total += data[key];
//   }
// }
// console.log("Total = " + total);

// Shorter way (with Object.values() + filter()):
// let data = {
//   a: 10,
//   b: 20,
//   c: "hello",
//   d: 30,
//   e: true,
// };

// let total = Object.values(data)
//   .filter((val) => typeof val === "number")
//   .reduce((sum, val) => sum + val, 0);

// console.log("Total = " + total);

// Q11 – Count how many string values are in the object

// let info = {
//   name: "Puneet",
//   city: "Jaipur",
//   age: 25,
//   isActive: true,
//   gender: "Male",
// };

// // ❓ Task:
// // कितनी string-type values हैं, count करो
// // Output: 3
// let stringCount = 0;
// for (let key in info) {
//   if (typeof info[key] === "string") {
//     stringCount++;
//   }
// }
// console.log("Total string values: " + stringCount);

// Q12 – Find average of numeric values

// let report = {
//   math: 80,
//   science: 70,
//   english: 90,
//   name: "Ravi",
//   passed: true,
// };

// // ❓ Task:
// // सिर्फ numeric values का average निकालो
// // Output: Average = 80
// let totalMarks = 0;
// let count = 0;
// for (let key in report) {
//   if (typeof report[key] === "number") {
//     totalMarks += report[key];
//     count++;
//   }
// }

// let average = totalMarks / count;
// console.log("Average = " + average);

// let userInfo = {
//   name: "Puneet",
//   city: "Jaipur",
//   profession: "Software Engineer",
//   country: "India",
// };
// // ❓ Task:
// // Object में जो string-type values हैं, उनमें से जो सबसे लंबी है, उसे ढूँढो।
// let longestring = "";
// for (let key in userInfo) {
//   if (
//     typeof userInfo[key] === "string" &&
//     userInfo[key].length > longestring.length
//   ) {
//     longestring = userInfo[key];
//   }
// }
// console.log("Longest string value: " + longestring);

// Q1 – Access First and Last Element

// let arr = [10, 20, 30, 40, 50];

// // ❓ Task:
// // 1. First element access करो
// // 2. Last element access करो
// // Output:
// // First: 10
// // Last: 50
// let fristElement = arr[0];
// console.log("Frist:", fristElement);
// let lastElement = arr[arr.length - 1];
// console.log("last:", lastElement);

// let marks = [80, 75, 92, 60, 88];

// // ❓ Task:
// // 1. Array में जितने भी numbers हैं उनका जोड़ (sum) निकालो
// // 2. Output होना चाहिए:
// //    Total: 395
// let total = 0;
// for (let i = 0; i < marks.length; i++) {
//   total += marks[i];
// }
// console.log("Total:", total);

// let marks = [80, 75, 92, 60, 88];

// // ❓ Task:
// // 1. Array के सभी numbers का जोड़ निकालो (sum)
// // 2. Total elements से divide करके average निकालो
// // ✅ Output होना चाहिए:
// // Total: 395
// // Average: 79
// let total = 0;
// for(let i = 0; i < marks.length; i++) {
//     total += marks[i];
// }
// console.log("Total:", total);
// let average = total / marks.length;
// console.log("Average:", average);

// let marks = [80, 75, 92, 60, 88];

// // ❓ Task:
// // 1. Array के सभी numbers का जोड़ निकालो (sum)
// // 2. Total elements से divide करके average निकालो
// // ✅ Output होना चाहिए:
// // Total: 395
// // Average: 79
// let total = 0;
// for (let i = 0; i < marks.length; i++) {
//   total += marks[i];
// }
// console.log("Total:", total);
// let average = total / marks.length;
// console.log("Average:", average);

// let scores = [88, 92, 75, 91, 85];

// ❓ Task:
// 1. इस array में सबसे बड़ा (max) number निकालो
// 2. और सबसे छोटा (min) number निकालो
// ✅ Output:
// Max: 92
// Min: 75
// let maxscore = scores[0];
// let minscore = scores[0];
// for (let i = 1; i < scores.length; i++) {
//   if (scores[i] > maxscore) {
//     maxscore = scores[i];
//   }
//   if (scores[i] < minscore) {
//     minscore = scores[i];
//   }
//   if (scores[i] < minscore) {
//     minscore = scores[i];
//   }
// }

// console.log(("Max:", maxscore));
// console.log(("Min:", minscore));

// let numbers = [10, 15, 22, 33, 40, 55, 60];

// // ✅ Task:
// // 1. Array में जितने even numbers हैं, उन्हें filter करो
// // 2. Output होना चाहिए: [10, 22, 40, 60]
// let evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log("evenNumbers:", evenNumbers);

// let numbers = [10, 15, 22, 33, 40, 55, 60];

// // ✅ Task:
// // 1. Array में जितने odd numbers हैं, उन्हें filter करो
// // 2. Output होना चाहिए: [15, 33, 55]
// let oddNumbers = numbers.filter((number) => number % 2 !== 0);
// console.log("oddNumbers:", oddNumbers);

// let numbers = [10, 15, 22, 33, 40, 55, 60];

// // ❓ Task:
// // 1. Array में कितने even numbers हैं, उन्हें count करो
// // ✅ Output:
// // Count: 4
// let evenCount = numbers.filter((number) => number % 2 === 0).length;
// console.log("Count:", evenCount);

// let numbers = [10, 15, 22, 33, 40, 55, 60];

// // ❓ Task:
// // 1. Array में कितने odd numbers हैं, उन्हें count करो
// // ✅ Output:
// // Count: 3
// let oddCount = numbers.filter((number) => number % 2 !== 0).length;
// console.log("Count:", oddCount);

// let numbers = [1, 2, 3, 4, 5];
// // ❓ Task:
// // 1. इस array के सभी numbers का जोड़ निकालो `for` loop से
// // ✅ Output: Total: 15
// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i];
// }
// console.log("Total:", total);

// let numbers = [5, 10, 15, 20];
// // ❓ Task:
// // 1. `while` loop का इस्तेमाल करके सभी numbers का जोड़ निकालो
// // ✅ Output: Total: 50
// let total = 0;
// let i = 0;
// while (i < numbers.length) {
//   total += numbers[i];
//   i++;
// }

// console.log("Total:", total);

// Array of Methods
// 1. forEach
// 2. map
// 3. filter
// 4. reduce

// const numbers = [1, 2, 3, 4, 5];
// // // 1. forEach
// // numbers.forEach((num) => {
// //   console.log("Numbers:", num);
// // });
// // // 2. map
// const doubled = numbers.map((num) => num * 2);
// console.log("doubled:", doubled);

// let numbers = [1, 2, 3];
// let result = numbers.map((num) => num * 10);
// console.log("result:", result);

// let names = ["puneet", "rohit", "amit"];
// let uppercaseNames = names.map((name) => name.toUpperCase());
// console.log("uppercaseNames:", uppercaseNames);

// let names = ["puneet", "rohit", "amit"];
// let uppercaseNames = names.map((name) => name.toUpperCase());
// console.log("uppercaseNames:", uppercaseNames);
// let lenth
// let arr = [4, 9, 2, 15, 3];
// let timeout = 1000;
// let sum = 0;
// setTimeout(() => {
//   sum = arr.reduce((accumulatar, currentValue) => {
//     return accumulatar + currentValue;
//   });
//   console.log("sum:", sum);
// }, timeout);
// //  Output: 15

// let numberse = [1, 2, 3, 4, 5];
// // output: 15;
// let sum = numberse.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
// console.log("sum:", sum);
// //
// ❓ Question 2:
// Find the maximum number in this array.
// let scores = [88, 92, 75, 91, 85];
// // 👉 Expected Output: 92

// // ✍️ Your code here:
// let maxScore = scores.reduce((max, current) => {
//   return current > max ? current : max;
// });
// console.log("maxScore:", maxScore);

// ❓ Question 3:
// Find the minimum number in this array.
// let scores = [88, 92, 75, 91, 85];
// // 👉 Expected Output: 75

// // ✍️ Try your code here:
// let minScore = scores.reduce((min, currentValue) => {
//   return currentValue < min ? currentValue : min;

// });
// console.log("minScore:", minScore);

// ❓ Question 4:
// Find the average (औसत) of numbers in this array
// let scores = [88, 92, 75, 91, 85];
// // 👉 Expected Output: (88 + 92 + 75 + 91 + 85) / 5 = 86.2

// // ✍️ Try your code here:
// let total = scores.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
// let average = total / scores.length;
// console.log("total:", total);
// console.log("average:", average.toFixed(2));

// ❓ Question 5:
// Find the product (गुणा) of all elements in this array:
// let nums = [2, 3, 4, 5];
// // 👉 Expected Output: 2 * 3 * 4 * 5 = 120

// // ✍️ Try your code here:
// let product = nums.reduce((accumulator, currentValue) => {
//   return accumulator * currentValue;
// }, 1);
// console.log("product:", product);

// ❓ Question 6:
// Check if all elements in the array are even numbers.
// सभी numbers even हैं या नहीं, ये check करो।

// let numbers = [2, 4, 6, 8, 10];
// // 👉 Expected Output: true

// let numbers2 = [2, 3, 6];
// // 👉 Expected Output: false

// // ✍️ Try your code using .every()
// let allEven = numbers.every((num) => num % 2 === 0);
// console.log("Are all numbers even?", allEven);
// let allEven2 = numbers2.every((num) => num % 2 === 0);
// console.log("Are all numbers even?", allEven2);

// ❓ Question 7:
// Check if **at least one number is odd** in the array.
// कम से कम एक भी number odd है क्या?

// let numbers = [2, 4, 6]; // 👉 Expected Output: false
// let numbers2 = [2, 3, 6]; // 👉 Expected Output: true

// // ✍️ Try your code using .some()
// let hasodd = numbers.some((num) => num % 2 !== 0);
// console.log("has at least one odd numbers?", hasodd);
// let hasodd2 = numbers2.some((num) => num % 2 !== 0);
// console.log("has at least one odd numbers?", hasodd2);

// ❓ Question 7:
// Check if **at least one number is odd** in the array.
// कम से कम एक भी number odd है क्या?

// let numbers = [2, 4, 6]; // 👉 Expected Output: false
// let numbers2 = [2, 3, 6]; // 👉 Expected Output: true

// // ✍️ Try your code using .some()
// let hasadd = numbers.some((num) => num % 2 !== 0);
// console.log("has at least one odd numbers?", hasadd);
// let hasodd2 = numbers2.some((num) => num % 2 !== 0);
// console.log("has at least one odd numbers?", hasodd2);
