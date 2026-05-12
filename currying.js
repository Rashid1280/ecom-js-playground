const products = [
  { name: "Bottle", price: 100 },
  { name: "Glass", price: 50 },
  { name: "Pillow", price: 150 },
  { name: "Comb", price: 20 },
  { name: "Camera", price: 1000 }
];


function applyDiscount(discount, price) {
  return price - (price * discount / 100);
}

function applyDiscount(discount) {
    return function (price){
        return price - (price * discount / 100)
    }

} 

const tenPercent = applyDiscount(10);



products.forEach(item => {
  console.log(`${item.name}: ₹${tenPercent(item.price)}`);
});