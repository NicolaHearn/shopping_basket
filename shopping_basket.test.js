const Candy = require('./candy');
const ShoppingBasket = require('./ShoppingBasket');

describe(Candy, () => {
  it("returns the name and price of the candy", () => {
    const mars = new Candy('Mars', 1.99)

    expect(mars.itemName).toBe("Mars");
    expect(mars.price).toBe(1.99);
  });

  it("returns the name and price of the candy using a getter", () => {
    const mars = new Candy('Mars', 1.99)

    expect(mars.getName()).toBe("Mars");
    expect(mars.getPrice()).toBe(1.99);
  });
});

describe(ShoppingBasket, () => {
  it("returns an empty array when the shopping basket is empty", () => {
    const myBasket = new ShoppingBasket();

    expect(myBasket.items).toEqual([])
  });
  it("returns zero if the shopping basket is empty", () => {
    const myBasket = new ShoppingBasket();

    expect(myBasket.getTotalPrice()).toBe(0);
  });
  it("adds an item to the basket", () => {
    const myBasket = new ShoppingBasket();
    const myCandy = {}
    myBasket.addItem(myCandy);

    expect(myBasket.items.length).toBe(1);
  });
  it("adds 2 items to the basket and gets the total price", () => {
    const myBasket = new ShoppingBasket();
    const myCandy = {price: 1.99}
    const myOtherCandy = {price: 2.99}
    myBasket.addItem(myCandy);
    myBasket.addItem(myOtherCandy);

    expect(myBasket.getTotalPrice()).toBe(4.98);
  });
  it("applies a discount to the total price of the basket", () => {
    const myBasket = new ShoppingBasket();
    const myCandy = {price: 6.99}
    const myOtherCandy = {price: 2.99}
    myBasket.addItem(myCandy);
    myBasket.addItem(myOtherCandy);
    myBasket.applyDiscount(5);

    expect(myBasket.getTotalPrice()).toBe(4.98)
  })
});