//3) Array Methods — Step by Step

// const nums = [1, 2, 3, 4, 5, 6];
// console.log(nums);

//A) map (transform same length
//const doubled = nums.map((n) => n * 2); // [2,4,6,8]

//B) filter (keep true items)
//const even = nums.filter(n => n % 2 === 0); // [2,4]

//C) reduce (accumulator fold)

// const sum = nums.reduce((acc, n) => {
//   // step1: acc=0, n=1 -> 1
//   // step2: acc=1, n=2 -> 3
//   // step3: acc=3, n=3 -> 6
//   // step4: acc=6, n=4 -> 10
//   return acc + n;
// }, 0);
// console.log(sum); // 10

// D) some / every

// console.log(nums.some(n => n > 3));  // true (at least one)
// console.log(nums.every(n => n > 0)); // true (all)
