class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getDetails() {
    console.log(this.name, this.price, this.category);
  }

}

class DiscountedProduct  extends Product{
    constructor(name, price, category, discount){
super(name, price, category);
this.discount = discount;
    }

    getFinalPrice(){
        const final = this.price - (this.price * this.discount / 100);
console.log(`the product ${this.name} is of rs ${final}`);
        
    }
}

const pro = new DiscountedProduct('comb', 25, 'hair',10);
pro.getFinalPrice();

const gel = new DiscountedProduct('hairgel', 100, 'clean',20);
gel.getFinalPrice();

const powder = new DiscountedProduct('talcom', 456, 'powder', 15);
powder.getFinalPrice();
