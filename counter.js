function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    reset: function () {
      count = 0;
      return count;
    },
    getValue: function () {
      return count;
    },
  };
}
//Enter दबाओ। कोई output नहीं आएगा क्योंकि आपने सिर्फ function define किया है।

// Step 2: अब counter बनाओ
const counter = createCounter();

console.log(counter.increment()); // हर बार +1 करेगा
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.getValue());
