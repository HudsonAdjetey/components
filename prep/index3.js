"use strict";

const human = {
  talk() {
    console.log("Hello, I am a human");
  },
};
const person = Object.create(human);
person.__proto__.name = function () {
  console.log("John Doe");
};

// using new Object()
/**
 * @function newPerson
 * @param
 */

const newPerson = new Object({
  talk() {
    console.log("Hello, I am a new person");
  },
  name: "John Doe",
});
console.log(newPerson.propertyIsEnumerable("talk"));

const numbers = [2, 4, 6];
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven);

function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      console.log(count);
    },
    decrement() {
      count--;
      console.log(count);
    },
    getCounter() {
      return count;
    },
  };
}

const { increment, decrement, getCounter } = createCounter();
increment();
increment();
increment();
increment();
increment();
increment();
console.log(getCounter());
