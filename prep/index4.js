/* POLYFILL */

function sayHello(name) {
  console.log(`Hello ${this.name}`);
}

const greetings = sayHello.bind({ name: "Hudson" });
greetings();

function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

const result = sum.call(this, 1, 2, 3);
console.log(result)
