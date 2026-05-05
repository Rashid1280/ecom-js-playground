//REST OPERATOR
 
function dicountCalculator(disc,...prices) {
    let total =0;
    let items =0;
    
    for(const item of prices){
        total += item;
        items++;
    }
    console.log(`Your total is ${total}`);
    console.log(`Your average is ${total/items}`);
    let discountPrice = (total*disc)/100;
    let finalPrice = total-discountPrice;
    console.log(`Your price after discount is ${finalPrice}`);
    
    
} 

dicountCalculator(10,20,20,20,20,20)

// SPREAD OPERATOR

function cartMerger (...carts){
const finalCart  = [].concat(...carts); 

const uniqueCart = [...new Set(finalCart)]
console.log("your final cart after merging is" ,uniqueCart);



}
let cart1 = ['orange', 'banana', 'kiwi'];
let cart2 = ['apple', 'banana', 'grape'];
let cart3 = ['pineapple', 'mango', 'kiwi']
cartMerger(cart1,cart2,cart3)

//DESTRUCTURING

const order = {
  orderId: "ORD-2026-001",
  customer: "Rashid",
  items: ["Leather Bag", "Wallet", "Belt"],
  total: 1899,
  discount: 10,
  status: "confirmed"
};
//    arr= Object.values(order);
//    console.log(arr);
   
const {orderId,customer, items, total,discount} = order;
console.log(`Order no. : ${orderId}`);
console.log(`Name of the customer : ${customer}`);
console.log("Products for purchanse", items);
let disc = (total*discount)/100;
let finalPrice = total-disc;
console.log(`Your total payment is ${finalPrice}`);



 