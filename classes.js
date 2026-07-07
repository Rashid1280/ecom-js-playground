class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  applyDiscount(percent) {
    return this.price - (this.price * percent / 100);
  }
}

// create multiple objects from one class
const bag = new Product("Leather Bag", 999);
const wallet = new Product("Wallet", 499);

console.log(bag.applyDiscount(10));    // ₹899
console.log(wallet.applyDiscount(20)); // ₹399

class DiscountedProduct extends Product {
  constructor(name, price, discount) {
    super(name, price); // calls parent constructor
    this.discount = discount;
  }

  getFinalPrice() {
    return this.applyDiscount(this.discount);
  }
}

const sale = new DiscountedProduct("Bag", 999, 30);
console.log(sale.getFinalPrice()); // ₹699.3