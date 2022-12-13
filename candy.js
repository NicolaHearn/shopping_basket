class Candy {
  constructor(itemName, price) {
    this.itemName = itemName,
    this.price = price
  }

  getName() {
    return this.itemName;
  }

  getPrice() {
    return this.price;
  }
}

module.exports = Candy;