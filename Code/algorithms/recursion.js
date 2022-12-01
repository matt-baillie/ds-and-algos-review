function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}
// console.log(fibonacciIterative(6));
let calculations = 0;

// Regular Recursive
function fibRecursive(n) {
  if (n < 2) {
    return n;
  } else {
    calculations++;
    return fibRecursive(n - 1) + fibRecursive(n - 2);
  }
}

let calculations2 = 0;
// Dynamic Memoized
function fibonacciRecursive() {
  let cache = {};
  return function fibonacci(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        calculations2++;

        cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return cache[n];
      }
      // return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
  };
}

const memoized = fibonacciRecursive();
console.log(memoized(30));
console.log(fibRecursive(30));
console.log("Reg Recursive: " + calculations);
console.log("Dynamic: " + calculations2);

// ZTM example
function fibonacciMaster() {
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}
const fasterFib = fibonacciMaster();
// console.log(fasterFib(5));
