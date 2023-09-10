// Kyle Bandong Homework 3

//! Question 1
// Create an array of pizzaToppings with at least four different toppings
const myPizzaToppings = ["pepperoni", " sausage", " onions", " pineapples"];

//! Question 2
// Create a greetCustomer function that
// Prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings
// (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

function greetCustomer() {
  console.log("Welcome to Pizza House! Tonight's toppings are: ");

  for (let toppings of myPizzaToppings) {
    console.log(toppings);
  }
}

greetCustomer();

//! Question 3
// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings

function getPizzaOrder(size, crust, ...toppings) {
  console.log(
    `One ${size} ${crust} crust pizza with ${toppings} coming right up!`
  );

  return [size, crust, toppings];
}
getPizzaOrder("large ", "thick", myPizzaToppings);

//! Question 4
// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

function preparePizza([size, crust, toppings]) {
  console.log("...Cooking pizza...");
  const madePizza = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  return madePizza;
}

let customerOrder = preparePizza(
  getPizzaOrder("large ", "thick", myPizzaToppings)
);

//! Question 5
// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order,
// i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in

function servePizza(madePizza) {
  console.log(
    `Order up! Here's your ${madePizza.size} ${madePizza.crust} crust pizza with ${madePizza.toppings}... enjoy!`
  );
}

servePizza(customerOrder);
