// function in js
// What are first class functions
// They are functions that can be treated as a variable and be manipulated in different ways

function square(num) {
  return num * num;
}

/* function displaySquare(fn) {
  console.log(`The square function has `, fn(2) + " area");
}
displaySquare(square); */

// WHAT IS IIFE - Immediately Invoked Function Expression

(function square2(num) {
  console.log(num * num + " square");
})(4);

// output based question on IIEF
(function (x) {
  return (function (y) {
    console.log(y + x);
  })(2);
})(1);

// Functon Scope

let globalVar = "I am global";

function outerFunction() {
  let outerVar = "I am outer";

  function innerFunction() {
    let innerVar = "I am inner";
    console.log(innerVar); // I am inner
    console.log(outerVar); // I am outer
    console.log(globalVar); // I am global
  }

  innerFunction();
}
outerFunction();

var num1 = 20;
num2 = 3;
nameUser = "Roadsider";

function getScore() {
  var num1 = 2;
  num2 = 3;
  function add() {
    return num1 + num2;
  }
  return add();
}

// Function Scope
/* for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
} */

/* functionName();

function functionName() {
  console.log("Hello");
}

var x = 32;

var fun = function () {
  console.log(x);
  var x = 20;
}; */

// SPREAD VRS REST OPERATORS

function multiply(num1, num2) {
  return num1 * num2;
}

/* var arr = [5, 6];

const fn = (a, x, y, ...numbers) => {
  console.log(a, y);
};

const numbersAll = [1, 2, 4, 6, 7, 8, 9, 34, 31, 27, 67];
fn(...numbersAll); */

function firstNonRepeatingCharacter(str) {
  const charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of str) {
    if (charCount[char] === 1) return str.indexOf(char);
  }
  return -1;
}

//
// 1. Function Scope
// 2. Function Name
// 3. Variable Scope

// DIFFERENCES BETWEEN ARROW FUNCTION AND A NORMAL FUNCTION

/* 
- Syntax
  Arrow function: (params) => expression
  Normal function: function name(params) { return expression; }
  
- This keyword
  Arrow function: Arrow function does not have its own this keyword. It uses the this keyword of the enclosing function or global object.
  Normal function: Arrow function uses its own this keyword.

  Arrow function: (this: ContextType) => ReturnType
  Normal function: function (this: ContextType): ReturnType { return expression; }
  
- Lexical this
  Arrow function: Arrow function lexically captures the this value from its surrounding context at the time of creation.
  Normal function: Arrow function does not bind its own this value, but uses the this value from the surrounding context.
  
- Arrow function does not support arguments object
  Normal function: function name(...args) { return expression; }
  
- Arrow function does not support arguments.length
  Arrow function: function name() { return expression; }
  
- Arrow function does not support prototype property
  Normal function: function name() { return expression; }
  
- Arrow function does not support new operator property 

- Arrow function does not support yield keyword 

*/

/* function thisFn() {
  console.log(arguments);
  console.log(this);
}

thisFn(1, 34, 5, 4);

const thisFnArrow = () => {
  console.log(arguments);
  console.log(this);
}; */

// thisFnArrow(1, 34, 5, 4);

let username = "Hudson";

let user = {
  username: "Hudson Coder",
  greet() {
    // console.log(`Hello, my name is ${this.username}!`);
  },
  arrFn: () => {
    // console.log(`Subscribe to ${this.username}`);
  },
};

user.greet(); // Hello, my name is Hudson Coder!

user.arrFn(); // Subscribe to Hudson Coder

// Using arrow function to bind this

/* function makeFn() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

makeFn()(); */

// global scope
const e = 10;
/* function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20 */

// let count = 10;
/* (function printCount() {
  function counter() {
    let count = 53;
    console.log(count);
  }
  return counter();
})();
 */

var addSix = createBase(6);
addSix(10);
addSix(21);

function createBase() {
  var baseNum = arguments[0];
  return function (num) {
    // console.log(baseNum + num);
    return baseNum + num;
  };
}

// Time Optimization
// 1. Avoid using for loops
// 2. Use map, filter, reduce, and find methods
// 3. Use arrow functions
// 4. Use const and let instead of var

function find(index) {
  // var i;
  let arr = [];

  for (let i = 0; i < 1000; i++) {
    arr[i] = i * i;
  }
  console.log(arr[index]);
}
/* console.time(12);

find(6);

console.timeEnd(12);
console.time(6);

find(12);

console.timeEnd(6); */

function a() {
  for (var i = 0; i < 4; i++) {
    (function (currentValue) {
      setTimeout(() => {
        console.log(currentValue);
      }, i * currentValue);
    })(i);
  }
}
a();
// Function Hoisting
// 1. Function declarations are hoisted to the top of the scope
// 2. Function expressions are not hoisted
// 3. Variables are not hoisted

const contact = [];

function addContact(callBack) {
  const userInfo = {
    name: "John Doe",
    phone: "1234567890",
    email: "johndoe@example.com",
    address: "123 Main St",
  };
  return callBack(userInfo);
}

function cbFn(userInfo) {
  let username = "hudson";
  contact.push(...contact, userInfo);
  console.log(contact.length);
}

// addContact(cbFn);

function privateCounter() {
  let counter = 0;

  return {
    increment() {
      counter++;
      console.log(counter);
    },
    decrement() {
      counter--;
      console.log(counter);
    },
    getCounter() {
      return counter;
    },
  };
}

const counter = privateCounter();

counter.increment();

counter.decrement();

console.log(counter.getCounter());

// Function Overloading

function sum(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("Both inputs must be numbers");
  }
}

function sum(...args) {
  console.log(args);
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "number") {
      total += args[i];
    } else {
      throw new Error("All inputs must be numbers");
    }
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
    console.log(observer);
  }

  notifyObservers(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log("Observer received data:", data);
  }
}

const subject = new Subject();
const observer1 = new Observer();
subject.addObserver(observer1);

subject.notifyObservers("Hello, Observers!");

/* MODULE PATTERN */

const createPrivateCounter = () => {
  let counting = 0;
  return {
    increment: () => {
      return counting++;
    },
    decrement: () => {
      return counting--;
    },
    getCount: () => counting,
  };
};

/* SINGLETON - This ensures that a class has only one instance and the instance is widely accessible */
class Singleton {
  constructor(name) {
    if (!Singleton.instance) {
      console.log(name);
      this.name = name;
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

function singleValue() {
  let instance;

  function createInstance() {
    return {
      value: "Hello, Singleton!",
    };
  }
  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
}

const { getInstance } = singleValue();

/* FACTORY PATTERN */
/* The factory Pattern is used to create objects without specifying the exact class of object that will be created. It encapsulates the instantiation logic */

function createProduct(type, name, price) {
  switch (type) {
    case "Electronics":
      return new ElectronicsProduct(name, price);
    case "Clothing":
      return new ClothingProduct(name, price);
    default:
      throw new Error("Invalid product type");
  }
}

class ElectronicsProduct extends Product {
  display() {
    console.log(`Electronics Product: ${this.name}, Price: ${this.price}`);
  }
}

class ClothingProduct extends Product {
  display() {
    console.log(`Clothing Product: ${this.name}, Price: ${this.price}`);
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  display() {
    console.log(`Product: ${this.name}, Price: ${this.price}`);
  }
}
const createProducts = createProduct("Electronics", "iron", 345);
console.log(createProducts);

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
console.log(instance1 === instance2); // true, both are the same instance


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
