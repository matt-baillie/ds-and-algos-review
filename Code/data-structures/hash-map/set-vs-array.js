// Arrays
// When to use:
// Constant: 0(1)
// Logaritmic: 0(log n)
// Linear: 0(n)

const myArray = [1, 2, 3, 4, 5, 6];

// Difference between Array and Sets
// Array
// ordered list
// Access elements with index
// Iterate through whole array for many methods; ie) 0(n)
console.log(myArray[3]);

// Sets
//  unordered pool of unique elements
// no duplicates
//  no integer index
//  stores the elements as "keys"
//  Most methods are 0(1)
const mySet = new Set(myArray);

console.log(mySet);
mySet.add(99);
mySet.delete(3);
console.log(mySet);
// O(1)
console.log(mySet.has(4));
console.log(mySet.size);
mySet.clear();
console.log(mySet);
