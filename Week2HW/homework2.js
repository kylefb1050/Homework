//Kyle Bandong Homework 2

const { log } = require("console");

let pizzaPlace = "Pies of Sicily";

console.log(pizzaPlace);
console.log(typeof pizzaPlace);

let numberOfToppings = 10;

console.log(numberOfToppings);
console.log(typeof numberOfToppings);

console.log(
  `Welcome to ${pizzaPlace}, where we offer ${numberOfToppings} toppings per pizza.`
);

console.log("How many toppings would you like on your pizza?");

let numberOfToppings1 = 10;

if (!numberOfToppings1 <= 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza");
}
