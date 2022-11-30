// Hash Map
// has key:value pairs
// remembers original insertion order of keys
// primitive and objects can be used as a key or a value
// created with new Map([])
// key-value pairs are contained in an array structure
// key-value is expressed as elements in an array [key, value]
// const myMap = new Map([["name", "John"], ["surname", "Smith"], []]);
// console.log(myMap);

// Benefits
// JS objects only support ONE key objects, it overwrites the
// previous key objectif a new one is added.
// Thus, {{}: 'a, {}: 'b} cannot exists; shown in code below
//
// const myObject = {};
// const a = {};
// const b = {};
// myObject[a] = "a";
// myObject[b] = "b";
// console.log(myObject);

// Map keeps track of both key objects
// const c = {};
// const d = {};
// const objMap = new Map([
//   [c, "c"],
//   [d, "d"],
// ]);
// console.log(objMap);

const newMap = new Map([
  [5, "5"],
  [{}, "a"],
  [{}, "b"],
]);
// Map Methods
// .set: adds a key-value pair to the map
newMap.set({}, "c");
console.log(newMap);

// .entries prints all pairs
console.log(newMap.entries());

// .forEach: (value, key, map) => {code block}
console.log(newMap.forEach((value, key, map) => console.log(value, key, map)));

// .has(key): takes only a key, returns a boolean
console.log(newMap.has(5));

// .size: returns a number for the size of the map
// NOT A FUNCTION!! Just like .length!!
console.log(newMap.size);
// .delete(key): accepts the key and deletes the associated node
newMap.delete(5);
console.log(newMap);

// .clear: clears the whole map
newMap.clear();
console.log(newMap);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach
