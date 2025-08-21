
//Topic 1 – Data Types
// console.log(typeof "puneet");
// console.log(typeof 123);
// console.log(typeof 23.45);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof [1,2,3,4]);
// console.log(typeof {name: "Puneet"});


// let value1 = 42;
// let value2 = "42";
// let value3;

// console.log(typeof value1);  
// console.log(typeof value2);  
// console.log(typeof value3);  
// console.log(typeof NaN);     

// console.log(typeof 123);
// console.log(typeof "123");
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof NaN)
// console.log(typeof [1,2,3,4]);
// console.log(typeof BigInt);
// console.log(typeof Symbol("id"));
// console.log(typeof 123n)
// console.log(typeof {name: "Puneet"});
// console.log(typeof function(){}); 
// console.log(typeof  false);




// let a;
// console.log(typeof a);

// a = null;
// console.log(typeof a);

// a = "Hello";
// console.log(typeof a);

// a = 999n;
// console.log(typeof a);

//Non-Primitive Data Types
//Q1. Object Property Access
// let person = {
//     name: "Rohit",
//     age: 25,
//     city: "delhi"
// };
// console.log(person);
// Task: city को "Delhi" में बदलो और फिर पूरा object print करो

//Q2. Nested Object Access
// let user = {
//     id: 101,
//     profile: {
//         username: "puneet",
//         address: {
//             city: "Jaipur",
//             pincode: 302001
//         }
//     }
// };
// console.log(user);

// Task: city और pincode को print करो



//  let products = [
//     { name: "Laptop", price: 50000 },
//      { name: "Apple", price: 20000 },
//      { name: "Tablet", price: 15000 }
    
//  ];
// console.log(products.find(p => p.price === 20000).name);

// Task: price 20000 वाले product का name print करो
// let car = {
//     brand: "Toyota",
//     model: "Fortuner",
//     year: 2023
// };

// Task: सभी keys और सभी values को अलग-अलग array में store करो

// Minimum value
// let a = [1,2,3,4];
// let minValue = Math.min(...a);
// a = a.filter(num => num !== minValue)
// console.log(minValue);
// console.log(a);
 
// ✅ Syntax:
// const person = { 
//     name: "Punit",
//     age: 25,
//     isStudent: true,
//     id: "pancard",
//     location: "jaipur",
//     pincode: 20200
// };
// console.log(person);


// object Access Dot notation(object.property)

// const user = {
//     name: "Rhoit",
//     age: 24,
//     id: "pancard",
//     location: "jaipur",
//     pincode: 20203,
//     isStudent: false
// }
//  console.log(user.name);



// Bracket notation (object["property"])
// const user = {
//     name: "Rhoit",
//     age: 24,
//     id: "pancard",
//     location: "jaipur",
//     pincode: 20203,
//     isStudent: false


// }
// person.city = "Jaipur";


//  console.log(user);
// JavaScript में object में नई property जोड़ने के दो तरीके होते हैं:

// Dot notation (obj.key = value)

// Bracket notation (obj["key"] = value)

// 1 – Dot Notation
// let person = {
//     name: "Amit",
//     age: 25
// };

// // koi new property add plus
// person.city = "Delhi";
// console.log(person);

// 2.Bracket Notation

// let person = {
//     name: "Puneet",
//     age: 27
// };
// person["hobby"] = "cricket";
// console.log(person);

// // Dynamic Property Add
// let keyName = "email";
// let person = {name: "Rohit"};
// // dynamic sovle property Add
// person[keyName] = "rohit@gmail.com";

// let keyName = "email";
// let person = {name: "Amit"};
// // dynamic preperty
// person[keyName] = "amit@eaample.com";
// console.log(person);

//Update existing property

// let person ={
//     name : "Punit",
//     age:25
// };

// // age ko update 
// person.age =30;
// console.log(person);
 
// let person = {
//     name: "Pankaj",
//     age: 25
// };
// person["name"] = "Punit";
// console.log(person);

// Example – Delete property
// let person = {
//     name: "Punit",
//     age : 25,
//     city: "Muzffernagar"
// }

// delete person.city;
// console.log(person);

// Recap:
// Add: obj.key = value या obj["key"] = value

// Update: उसी key को नए value से overwrite 
// Delete: delete obj.key

//1.stpe : create and object 
// 
// step 4: Delet property


// 1. Sum of Even Number using filter , reduce using

// const arr = [1, 2, 3, 4, 5, 6];
// const evenSum = arr
//  .filter(num => num % 2 === 0)
//  .reduce((sum, val) => sum + val, 0);
// console.log(evenSum);

// let a = 10;
// let b = 20;
// let sum = a + b;
// console.log("Sum is",sum);

// 1. JavaScript Object क्या है?

// const person = {
//     name: "Puneet",
//     age: 25, 
//     isStudent: true
// }
// console.log(person);

//2. Object को कैसे Access करते हैं?

// const person = {
//     name: "Rohit",
//     age: 26,
//     isStudent: false

// }
//Dot notation (object.property)
// console.log(person.name);
// Bracket notation (object["property"])
// console.log(person["age"]);
// console.log(person.isStudent);

// 3. Object में Propert ,जोड़ना, बदलना, हटाना 
//  1. Property जोड़ना (Add property)
// JavaScript में object में नई property जोड़ने के दो तरीके होते हैं:

// Dot notation (obj.key = value)

// Bracket notation (obj["key"] = value)
//Dot notation 

// let person = {
//     name: "Amit",
//     age: 25
// };

// //new property add
// person.city = "Delhi";
// console.log(person);
 

//Example 2 – Bracket Notation

// let person = {
//     name: "Amit",
//     age: 25
// };

// //new property plus
// person["hobby"] = "cricket";
// console.log(person);

//Example 3 – Dynamic Property Add करना

// let keyName = "email";
// let person = {name: "Puneet"}
// // dynamic तरीके से property जोड़ना
// person[keyName] = "pk854329@gmail.com";
// console.log(person);

// 2. Property बदलना (Update property)
// अगर object में पहले से कोई property है, तो उसी को नए value से overwrite कर सकते हैं।

// Example – Update existing property

// let person = {
//     name: "Puneet",
//     age: 25
// };

// //age ko updata do
// person.age =30;
// console.log(person);

// Dot notation और bracket notation, दोनों से update कर सकते हैं:
//  let person = { 
//     name: "Amit",
//     age: 30

//  }
//  person["person"] = "Rohit";
//  console.log(person);

// 3. Property हटाना (Delete property)
// JavaScript में delete keyword से object की property हटाई जाती है।

// Example – Delete property

// let person = {
//     name: "satveer",
//     age: 24,
//     city: "jaipur"
// };

// delete person.city
// console.log(person);

// 1.stpe: create an object

// let person = {
//     name: "Puneet",
//     age:28,
//     id: "Pancard"
// };
// // person.age =23;
// console.log("initial object",person);

// // 2️⃣ Step 2: Add new property
// person.city = "Delhi"; //Dot notation
// person["country"] = "india"; //Bracket notation
// console.log("After addind properties", person);

// // stpe 3: Updata existing property
// person.age = 30; // Dot notation
// person["name"] = "shiv"; //Bracket notation
// console.log("After updata properties", person);

// stpe 4: Delete property
// delete person.city; //Romove city
// delete person["country"]; // Remove conuntry
// console.log("After Deleting properties", person);




// 4. Object के अंदर Function (Method)

// const user = {
//     name: "Puneet",
//     greet: function() {
//         console.log("Hello " + this.name)
//         // यहाँ this.name मतलब object का अंदर का name
//     }
// };

// user.greet();

// 5. Object के अंदर Array और Nested Object

// const employee = { 
//     name : "Pankaj",
//     age: 28,
//     isStudent: true,
//     id: "pancard",
//     skill:["JavaScript", "React", "Node.js"],
//     address: {
//         city: "Delhi",
//         pincode: 110001
        
//     }
// };
// console.log(employee.skill[1]);
// console.log(employee.address.city);

//6. Object को loop करना
//✅ for...in loop:



// 7. Object.keys(), Object.values(), Object.entries()



// एक छोटा Summary:
// काम	तरीका
// Create Object	{ key: value }
// Access Property	obj.key या obj["key"]
// Add/Update Property	obj.key = value
// Delete Property	delete obj.key
// Loop Properties	for...in
// Get all keys/values	Object.keys(), Object.values()

// let arr = [1,2,3,4];

// // map -> transform
// let doubled = arr.map(n => n*2);

// // filter -> condition
// let evens = arr.filter(n => n%2 === 0);

// // reduce -> accumulate
// let sum = arr.reduce((acc, n) => acc+n, 0);

// console.log(doubled, evens, sum);

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Done!"), 1000);
// });

// promise.then(res => console.log(res));

// Q1: नीचे दिये गये variables का typeof बताओ:
// let x = "123";
// let y = 123;
// let z;
// let w = null;
// let arr = [1,2,3];

// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);
// console.log(typeof w);
// console.log(typeof arr); 


// function outer() {
//     let count = 0;
//     function inner(){
//         count++;
//         return count;

//     }
//     return inner;
// }

// let counter = outer();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function  createCounter(){
//     let = 0;  // private variable(outer scope iin is)
//     return function() {  // inner function closure bana
//         count++;
//         return count;

//     };

// }

// const counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// Explanation (Interview में ऐसे बोलना)

// createCounter() एक outer function है।

// इसमें count नाम का variable है जो private है (direct बाहर से access नहीं कर सकते)।

// return function() inner function को return करता है।

// Inner function को closure कहते हैं क्योंकि वो outer scope (count) को याद रखता है।

// इसलिए हर बार जब हम counter() call करते हैं → count की value बढ़ती है और maintain रहती है।
 

// ऐसा closure counter बनाओ जिसमें एक method हो:

// increment() → +1 करे

// decrement() → -1 करे

// reset() → 0 कर दे

// 0

//Closure counter with Methods

// function createCounter() {
//   let count = 0; // private variable

//   return {
//     increment: function () {
//       count++;
//       return count;
//     },
//     decrement: function () {
//       count--;
//       return count;
//     },
//     reset: function () {
//       count = 0;
//       return count;
//     },
//     getValue: function () {
//       return count;
//     }
//   };
// }

// // Usage
// const counter = createCounter();

// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.decrement()); // 1
// console.log(counter.reset());     // 0
// console.log(counter.getValue());  // 0
