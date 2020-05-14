"use strict";
// Declare an interface called Mountain that contains the following properties:
// name - string
// height - number
// Declare an array called mountains which is an array of type Mountain.
let mountains = [
    {
        name: "Kilimanjaro",
        height: 19341,
    },
    {
        name: "Everest",
        height: 29029,
    },
    {
        name: "Denali",
        height: 20310,
    },
];
// Declare a function called findNameOfTallestMountain. It takes one parameter, an
// array of Mountain objects. It returns a string, the name of the tallest mountain in the
// given array
// function
const findTallestMountain = (mountains) => {
    let tallest = mountains[0];
    mountains.forEach((mountain) => {
        if (mountain.height > tallest.height) {
            tallest = mountain;
        }
    });
    return tallest.name;
};
// Call findNameOfTallestMountain, passing it your mountains array as an argument
// Store the result of the function call (the return value) in a variable and then console.log
// the variable
console.log(findTallestMountain(mountains));
// Declare an array called products which is an array of type Product.
let products = [
    {
        name: "pen",
        price: 2,
    },
    {
        name: "stapler",
        price: 10,
    },
    {
        name: "water",
        price: 4,
    },
];
// Declare a function called calcAverageProductPrice. It takes one parameter, an array
// of Product objects. It returns a number, the average price of all the products provided
// as an argument.
const calcAverageProductPrice = (products) => {
    let total = 0;
    for (let price of products) {
        total += price.price;
    }
    return total / products.length;
};
console.log(calcAverageProductPrice(products));
// Declare an array called inventory which is an array of type InventoryItem
let inventory = [
    {
        name: "motor",
        price: 10.0,
        quantity: 10,
    },
    {
        name: "sensor",
        price: 12.5,
        quantity: 4,
    },
    {
        name: "LED",
        price: 1.0,
        quantity: 20,
    },
];
const calcInventoryValue = (inventoryItems) => {
    let value = 0;
    inventoryItems.forEach((item) => {
        value += item.product.price * item.quantity;
    });
    return value;
};
