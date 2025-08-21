//2) Loops — Step by Step

// let arr = [30,40,60,50,20,10];
// for(let i=0; i<arr.length; ++i){
// // i; 0 --> 2
//     console.log(i, arr[i]);
//}

//Flow: init i=0 → check → body → i++ → repeat.

//B) while

// let i = 0;
// while(i < 100) { // check first
//     console.log(i); 0,1,2,3,100
//     i++;

//}

//C) for...of (values iterate करना)
// for (const value of ["a", "b", "c"]) {
//     console.log(value); //a,b,c
// }

//D) for...in (keys iterate करना — Objects के लिए best)

// const user = {name:"Puneet", city: "Muzffernagar", pincode:"247775"}
// for(const key in user) {
//     console.log(key, user[key]); //name
// }

//Arrays पर for...in से index string keys मिलती हैं (और inherited भी आ सकते हैं) — interview में बोलो: Arrays के लिए for / for...of बेहतर है
