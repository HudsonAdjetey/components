class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log("Talking");
  }
}

const meClass = new Person();
const youClass = new Person();
meClass.talk();

Person.prototype.talk = function () {
  console.log("code improved");
};

meClass.talk();
meClass.__proto__.talkBack = function () {
  console.log("Talking back");
};
Person.prototype.repeatTalk = function () {
  console.log("Hello Africa boy");
};
meClass.talkBack();
youClass.talkBack();

console.log(meClass.__proto__ === Person.prototype);

const person = {};

// Defining a new property with specific attributes
Object.defineProperty(person, "name", {
  value: "Alice",
  writable: true,
  enumerable: true,
  configurable: true,
});

// Accessing the property
console.log(person.name); // Outputs: Alice

// Modifying the property
person.name = "Bob";
console.log(person.name); // Outputs: Bob

// Enumerating properties
for (let key in person) {
  console.log(key); // Outputs: name
}

// Defining a non-writable property
Object.defineProperty(person, "age", {
  value: 30,
  writable: false, // Cannot change this value
});

// Attempting to modify the non-writable property
person.age = 31; // This will silently fail in non-strict mode
console.log(person.age); // Outputs: 30

// Defining a property that is not enumerable
Object.defineProperty(person, "gender", {
  value: "female",
  enumerable: true, // Will not show up in enumeration
});

// Checking the properties
console.log(person); // Outputs: { name: 'Bob', age: 30 }

// Enumerating properties
for (let key in person) {
  console.log(key); // Outputs: name, age (but not gender)
}

const originalObj = {
  a: 1,
  b: 2,
  c: 3,
};

// Creating a shallow copy

const shallowCopy = { ...originalObj };

// Modifying the shallow copy

shallowCopy.a = 10;

// Checking the original object and the shallow copy

console.log(originalObj); // Outputs: { a: 1, b: 2, c: 3 }
console.log(shallowCopy); // Outputs: { a: 10, b: 2, c: 3 }

// Defining a deep copy

const deepCopy = JSON.parse(JSON.stringify(originalObj));

// Modifying the deep copy

deepCopy.a = 100;

// Checking the original object and the deep copy

console.log(originalObj); // Outputs: { a: 1, b: 2, c: 3 }
console.log(deepCopy); // Outputs: { a: 100, b: 2, c: 3 }

// Creating a nested object

const nestedObj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
};

// Creating a deep copy of the nested object using Object.assign

for (const key in nestedObj) {
  if (Object.prototype.hasOwnProperty.call(nestedObj, key)) {
    console.log(nestedObj[key]);
  } else {
    console.log("No key");
  }
}

console.log(typeof null === "object");

const deepCopyNestedObj = Object.assign({}, nestedObj);

// Modifying the deep copy

deepCopyNestedObj.c.d = 92;

// Checking the original object and the deep copy

console.log(nestedObj); // Outputs: { a: 1, b: 2, c: { d: 3, e: 4 } }
console.log(deepCopyNestedObj); // Outputs: { a: 1, b: 2, c: { d: 100, e: 4 } }

function Person2(age) {
  this.age = age;
}

Person2.age = 34;
Person2.prototype.sayAge = function () {
  console.log(this.age);
};
console.log(Person2.age);
const newMe2 = new Person2(344);
console.log(newMe2.age);

class NewPerson1 {
  constructor(age) {
    this.age = age;
  }
  sayAge() {
    console.log(`I am ${this.age}`);
  }
}

class NewPerson2 extends NewPerson1 {
  constructor(age, name) {
    super(age);
    this.name = name;
  }

  sayName() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

const newMe1 = new NewPerson1(25);
const newMe2Person = new NewPerson2(98, "Hudson");
newMe1.sayAge();
newMe2Person.sayAge();

// pure object
const PersonObj = {
  talk() {
    return "Talking";
  },
};

let meObj = Object.create(PersonObj);
meObj.__proto__.sing = function () {
  return "Singing";
};
console.log(meObj.talk()); // Outputs: Talking

console.log(meObj.sing()); // Outputs: Singing

console.log(PersonObj.sing());

let v2 = {};
Object.setPrototypeOf(v2, meObj);
console.log(meObj.__proto__);
/* 
class MyButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const button = document.createElement("button");
    button.textContent = "Click me!";
    shadow.appendChild(button);
  }
} */

const ParentInfo = {
  name: "Hudson",
};

Object.freeze(ParentInfo);
ParentInfo.name = "Kevin";
console.log(ParentInfo.name);

let book = "New complete";
// concat a string

book += " JavaScript";
// concat using concat method

console.log(book);
