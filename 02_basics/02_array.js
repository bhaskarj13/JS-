const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]

// now we have to concate the above 2 arrays.


// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// output - [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// but we need output in same line so here is the code, first we have to go via variable 

// my_newheros = marvel_heros.concat(dc_heros)
// console.log(my_newheros);

// output - [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]
// this is concatination


// spread operator 

// const my_newheros = [...marvel_heros, ...dc_heros]

// console.log(my_newheros);

// Output - [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]
const another_array = [1, 2, 3, [4, 8], 6, [5, 9, [3, 2]]]

const unique_array = another_array.flat(Infinity)
console.log(unique_array);

// output - [
//   1, 2, 3, 4, 8,
//   6, 5, 9, 3, 2
// ]

// above we use the flat operator and it is used for making a single unique array if we have a multiple array in a single array.


Array.isArray