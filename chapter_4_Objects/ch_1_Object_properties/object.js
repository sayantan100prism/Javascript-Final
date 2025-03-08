let pizza = {
    size: "large",
    toppings: ["cheese", "pepperoni", "mushrooms"],
    price: 14.99
};
delete pizza.size;
pizza.abcd = "xyz";
pizza.toppings.push("onions", "green peppers");
console.log(pizza); // should output {size: "large", toppings: ["cheese", "pepperoni", "mushrooms", "onions", "green peppers"], price: 14.99}