// Creaste a function that reverses a string
let string = "Hi my Name is Andrei"
// returns: "ierdnA si eman ym iH"

function reverse1(str) {
  // Check the input. Reverse would be redundant if only 1 letter.
  if (!str || typeof str != 'string' || str.length < 2) {
    console.log(`Input is not a string: ${str}`)
    return str
  }

  return str.split('').reverse().join(''); // Time: O(n) Space: O(1)
}

const reverse2 = (str) => {
  
  const backwards = []
  for (let i = str.length - 1; i >= 0; i--) { // Time: O(n) Space: 
    backwards.push(str[i])
  }
  return backwards.join('')
}

function reverse3(str) {
  return [...str].reverse().join('')
}
console.log(reverse2("Hi my Name is Andrei"))