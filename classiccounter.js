// function createCounter(){
//     let count = 0; //private variable
//     return function() { // inner(closure) function
//      count++;  //outer scope var used
//      return count; // updata value

//     };
// }

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());


// B) “Once” Utility (run only first time)
// Dry-run

// createCounter() call ⇒ count=0 बनता है, return करता है inner function.

// counter() call #1 ⇒ count++ ⇒ 1.

// counter() call #2 ⇒ 2.

// Outer खत्म होने के बाद भी count safe है (private) — यही closure की power

//  function once (fn) {
//     let done = false,result;
//     return function(...args) {
//       if (!done) {
//         result = fn.apply(this, args);
//         done = true;
//       }
//       return result;//next calls return cached result


//     };
//  }

//  const init = once(() => "Initialized");
//  console.log(init()); // "Initialized!"
//  console.log(init); // "Initialized" (cached)


// C) Memoization (cache results)

function memoize (fn) {
    const cache = new Map();
    return function(X) {
        if(cache.has(X)) return cache.get(X);
        const val = fn(X);
        cache.set(X, val);
        return val;
    };
}

 const slowSquare = n => {/* heavy */ return n*n }
 const fastSquare  = memoize(slowSquare);
 console.log(fastSquare(12)); // computer, caches
 console.log(fastSquare(5));// from caches
