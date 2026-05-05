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