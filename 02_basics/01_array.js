// array

const myArr = [0, 1, 2, 3, 4, 5]
// const myHeros = ["shaktiman", "nagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// // myArr.unshift(0)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr);

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);


// slice, spice
// slice - Do not manipulate the original array
// Spice - It manipulate the original Array

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);

// Output -  A  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]

const myn2 = myArr.splice(1, 3)

console.log(myn2);
//  output - [ 1, 2, 3 ]

console.log("C ", myArr);
// output - [ 1, 2 ]
// [ 1, 2, 3 ]
// C  [ 0, 4, 5 ]

// Splice manipulate the original Array