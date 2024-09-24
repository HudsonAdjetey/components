// Closure challenge
// write a function /* COUNNTER */ that returns another function. Each time the retured function is called, it should return the next number
// in the sequence. How would you implement this without using global variable.

// SOLUTION:
function counter() {
  let count = 0;
  return function () {
    return count++;
  };
}

/* 
Promise Handling: You have three asynchronous functions that return promises. How would you execute them in parallel but only log the results once all three have completed successfully, or log an error if any of them fails?

*/

// SOLUTION:
function asyncFunction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve("Async Function 1 resolved")
        : reject("Async Function 1 rejected");
    }, 1000);
  });
}

function asyncFunction2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve("Async Function 2 resolved")
        : reject("Async Function 2 rejected");
    }, 1500);
  });
}

function asyncFunction3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve("Async Function 3 resolved")
        : reject("Async Function 3 rejected");
    }, 2000);
  });
}

Promise.all([asyncFunction1(), asyncFunction2(), asyncFunction3()])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//   DEBOUNCE
//   You have a function that logs a message to the console every second. How would you debounce

//   SOLUTION:

/**
 * Debounce function that
 *  @param {function} func - function to debounce
 * @param {String} delay - timer function
 * @returns {String[@args]}
 *
 */

function debounce(func, delay) {
  let debounceTimer;
  let timeCalled = 0;
  return function (...args) {
    clearTimeout(debounceTimer);
    const context = this;
    console.log("Times called ", timeCalled++);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

function log() {
  console.log("Firend");
}

const debouncedLog = debounce(log, 1000);
debouncedLog();
debouncedLog();
debouncedLog();

/* 
Write a function to perform a deep clone of an object. What edge cases would you consider (e.g., circular references, special objects like Date, Map)?

*/

// SOLUTION:
function deepClone(obj, hash = new WeakMap()) {
  // handle null and non-objects
  if (obj === null || typeof obj !== "object") return obj;
  if (hash.has(obj)) return hash.get(obj);
  const clone = Array.isArray(obj) ? [] : {};
  hash.set(obj, clone);
  //   loop through my variable keys
  for (const keys in obj) {
    clone[keys] = deepClone(obj[key], hash);
  }
  return clone;
}

class CreateObj {
  constructor(_name) {
    this.name = _name;
  }
}

const newCreate = new CreateObj();

/* 
Event Delegation: Explain how event delegation works. How would you implement it for a list of items where clicking on any item should log its index?
*/

// SOLUTION:

function memoization(fn) {
  let cache = {};
  return function (...args) {
    // create a key
    const key = JSON.stringify(args);
    // check if the key exist
    if (cache[key]) return cache[key];
    let result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const fibo = (n) => {
  return n <= 1 ? n : fibo(n - 1) + fibo(n - 2);
};

const memoized = memoization(fibo);
console.log(memoized(34));
