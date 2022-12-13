const Candy = require("./candy");

class ShoppingBasket {
  constructor() {
    this.items = []
    this.discount = 0;
  };

  getTotalPrice() {
    let total = 0
    this.items.forEach(item => total += item.price);
    return total - this.discount  
  };

  addItem(item) {
    this.items.push(item)
  };

  applyDiscount(discount) {
    this.discount = discount;
  };
}


const candy = new Candy('Mars', 4.99);

candy.getName();
candy.getPrice();

const basket = new ShoppingBasket();
console.log(basket.getTotalPrice());
basket.addItem(candy);
console.log(basket.getTotalPrice());

basket.addItem(new Candy('Skittles', 3.99));
basket.addItem(new Candy('Skittles', 3.99));
console.log(basket.getTotalPrice());

module.exports = ShoppingBasket;