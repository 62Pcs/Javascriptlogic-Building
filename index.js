
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
const user = {
    name: "Rhoit",
    age: 24,
    id: "pancard",
    location: "jaipur",
    pincode: 20203,
    isStudent: false


}
person.city = "Jaipur";


 console.log(user);

