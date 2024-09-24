const mod2 = (function () {
  let instance;
  let privateVar = "privateVar";

  function init() {
    return {
      publicMethod: function () {
        console.log(privateVar);
      },
    };
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();

const instance1 = mod2.getInstance();
instance1.publicMethod(); // Outputs: "privateVar"

const instance2 = mod2.getInstance();
console.log(instance1 === instance2);

// CALL ONCE FUNCTION

const once = (func) => {
  let isCalled = false;
  return function () {
    if (!isCalled) {
      func.apply(this, arguments);
      isCalled = true;
    }
  };
};

function logArgs() {
  console.log(arguments);
}

const logOnce = once(logArgs);

logOnce("Hello", "World");
logOnce("Hello", "World");
logOnce("Hello", "World");

const callOnec = function () {
  let isCalled = false;
  return function () {
    if (isCalled) {
      console.log("Already called");
      return;
    } else {
      console.log("Called once");
      isCalled = true;
    }
  };
};

const callAnotherOnce = function () {
  let isCalled = false;
  if (isCalled) {
    console.log("Already called");
    return;
  } else {
    console.log("Called Once");
    isCalled = true;
    return isCalled;
  }
};

/* const callOnceFunc = callOnec();
callAnotherOnce();
callAnotherOnce();
 */

function isCalledOnce() {
  let isCalled = 0;
  return function () {
    if (isCalled > 0) {
      console.log("Already called");
    } else {
      console.log("Called once");
      isCalled++;
    }
  };
}

// const isCalledOnceDone = isCalledOnce();

// ONCE POLYFILL

function oncePolyfill(func) {
  let isCalled = false;
  return function () {
    if (!isCalled) {
      func.apply(this, arguments);
      isCalled = true;
    }
  };
}

// const oncePolyfillFunc = oncePolyfill(logArgs);

function logFn() {
  console.log(arguments);
}

const oncePolyfillFunc = oncePolyfill(logFn);

function createI(fn, context) {
  let ranFn;

  return function () {
    if (fn) {
      ranFn = fn.apply(context || this, arguments);
      console.log(ranFn);
      fn = null;
    }
    console.log(ranFn);
    return ranFn;
  };
}

function logN() {
  console.log(arguments);
}
const i = createI(logN, "context");
// i("Called Once", "Called Twice");

// MEMOIZE POLYFILL WITH TEST

function memoization(fn) {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) cache[key];
    cache[key] = fn.apply(this, arguments);
    return cache[key];
  };
}

const fibonnaci = memoization((n) => {
  if (n <= 1) {
    return n;
  } else {
    return fibonnaci(n - 1) + fibonnaci(n - 2);
  }
});

// console.log(fibonnaci(10));

// CURRYING

function curry(func) {
  const arity = func.length;
  return function curried(...args) {
    if (args.length === arity) {
      return func(...args);
    } else {
      return (...rest) => {
        return curried(...args, ...rest);
      };
    }
  };
}

function multiply(a, b, c) {
  return a * b * c;
}

console.log(multiply.length);

const multiplyCurried = curry(multiply);

console.log(multiplyCurried(2)(3)(4));

function curry2(fn) {
  let arrity = fn?.length;
  return function curried(...args) {
    if (args.length == arrity) {
      return fn(...args);
    } else {
      return function (...rest) {
        console.log(...rest);
        console.log(...args);
        return curried(...args, ...rest);
      };
    }
  };
}

const addNm = function (a, b, c) {
  return a + b + c;
};

const addCurried = curry2(addNm);

console.log(addCurried(2)(3)(4));

console.log("hello");

// Infinite currying

function infiteCurrying(fn) {
  return function innerCurry(...args) {
    if (args.length === 0) return innerCurry;
    const result = fn(...args);
    return (nextArgs) =>
      nextArgs === undefined ? result : infiteCurrying(result, newArgs);
  };
}

const sumReducer = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
const infiteAdd = infiteCurrying(sumReducer);
console.log(infiteAdd(34)());

function infiteCurry2(...args) {
  return function innerCurry(...newArgs) {
    if (newArgs.length === 0) {
      console.log(args);
      return args.reduce((acc, num) => acc + num, 0);
    }
    console.log(args, ...newArgs);
    return infiteCurry2(...args, ...newArgs);
  };
}

const infiteAdd2 = infiteCurry2(34)(42)();

console.log(infiteAdd2);

// check prime numbers

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function checkPrime(fn) {
  let prime = fn;
  for (let i = 2; i < 100; i++) {
    if (prime(i)) {
      console.log(i);
    }
  }
}
// checkPrime(isPrime);

/* 
Traffic light changes color based on time intervals

*/

/* let lightCurrent = "red";
let timer = 0;

const trafficLightSimulation = () => {
  return function (params) {
    const state = lightCurrent || params;
    switch (state) {
      case "red":
        console.log("red");
        lightCurrent = "yellow";
        timer = 4;
        break;
      case "yellow":
        console.log("yellow");
        lightCurrent = "green";
        timer = 6;
        break;
      case "green":
        console.log("green");
        lightCurrent = "red";
        timer = 3;
        break;

      default:
        console.log("Invalid state");
        return null;
    }
  };
};

setInterval(function () {
  if (timer > 0) {
    let trafficCall = trafficLightSimulation();
    const traf = trafficCall();
    console.log(traf);
    console.log("hello");
    timer--;
  }
}, 1000);
 */

/* @params { string } s
@returns { string } */

function findUniqueChar(char) {
  let charc = new Set();

  let result = 0;
  // loop through the char check for
  for (const chars in char) {
    if (charc.has(char[chars])) continue;
    charc.add(char[chars]);
    result = char[chars];
  }
  return result;
  // return the first unique char
}

class EventEmitter {
  /**
   * Create an instance of EventEmitter
   */
  constructor() {
    this.events = {};
  }

  /**
   * Adds a listener to an event
   *
   * @param {string} event
   * @param {function} listener - The listener function
   */
  addListener(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  /**
   * Remove a listener from an event
   * @param {string} eventName
   * @param {function} listener - The listener function
   */

  removeListener(eventName, listener) {
    if (this.events[eventName]) {
      const index = this.events[eventName].indexOf(listener);
      if (index !== -1) {
        this.events[eventName].splice(index, 1);
      }
    }
  }

  /**
   * Emit an event
   * @param {string} eventName
   * @param {...*} args
   */

  /**
   * Add once 
   *  @param {string} event
   * @param {listener} 
   * @param {...*} args 

   */
  addOnce(eventName, listener) {
    const wrapper = (...args) => {
      listener(...args);
      this.removeListener(eventName, wrapper);
    };
    this.addListener(eventName, wrapper);
  }
  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((listener) => listener(...args));
    }
  }
}

const eventEmitter = new EventEmitter();

const clickListener = function (...args) {
  console.log("Clicked");
  console.log(args);
};
eventEmitter.addListener("click", clickListener);

// Remove the event listener
eventEmitter.removeListener("click", clickListener);

// Emit an event
eventEmitter.emit("click", "Hello", "World");

let counter = 1;

