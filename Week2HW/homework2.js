//Kyle Bandong Homework 2

let pizzaPlace = "Pies of Sicily";
console.log(pizzaPlace);

let numberOfToppings = 10;
console.log(numberOfToppings);

console.log(
  "Hello, welcome to " +
    pizzaPlace +
    ", where we offer a whopping " +
    numberOfToppings +
    " toppings per pie!"
);

console.log("How many toppings would you like on your pizza?");

let numberOfToppings1 = 10;

if (!numberOfToppings1 > 11) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza");
}