class pizza {
  name;
  toppings = [];
  basePrice = 0;

  constructor(name, toppings, basePrice) {
    this.name = name;
    this.toppings = toppings;
    this.basePrice = basePrice;
  }
  get price() {
    return this.basePrice;
  }
}

const meroPizza = new Pizza(
  "meroPizza"[("lamb", "spanich", "mozzarella")],
  7.9
);

const margherita = new pizza(
  "margherita"[("tomatoes", "basil", "mozzarella")],
  7.9
);

const chickenPizza = new Pizza(
  "chickenPizza"[("chicken", "bluecheese", "mozzarella", "garlic")],
  7.9
);

console.log(meroPizza.getPrice());
console.log(meroPizza.toppings);
console.log(meroPizza, chickenpizza);

//task 2

class pizzaOrder {
  customerName;
  deliveryType = [];
  pizzType = [];
  pizzPrice = 0;

  constructor(customerName, deliveryType, pizzType, pizzaPrice) {
    this.customerName = customerName;
    this.deliveryType = deliveryType;
    this.pizzaType = pizzaType;
    this.pizzaPrice = pizzaPrice;
  }
}

const newOrder = new pizzaOrder("khanal", "Home Delivery", [
  chickenPizza,
  meroPizza,
]);

console.log(newOrder);
