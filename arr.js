let fruits = ['banana', 'cherry', 'apple', 'orange'];
console.log(fruits[1]);
console.log(fruits.length);
console.log(fruits.indexOf('apple'));
console.log(fruits.includes('kiwi'));
console.log(fruits.slice(1,3));

fruits.push('kiwi')
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift('watermelon');
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.splice(1,2, 'grape')
console.log(fruits);

let final = fruits.filter((item)=>{
 return item !== 'grape';
})
console.log(final);

// FOREACH AND MAP() 

const user = [
    {name : "bottle", price : 100},
    {name : "glass", price : 50},
    {name : "pillow", price : 150},
    {name : "comb", price : 20},
    {name : "camera", price : 1000}

];
const discount = user.map((item)=>{
let disc = (item.price * 10)/100;
let final = item.price-disc;
return {name : item.name, price: final}
})
console.log(discount);


discount.forEach(item => {
    console.log(`Product: ${item.name} | Price :Rs${item.price}`);
    
});

// DESTRUCTURING
 apiResponse = [
  "ORD-2026-007",
  "Rashid",
  ["Shoes", "Belt", "Wallet"],
  1599,
  "shipped"
];
// Your tasks:

// Destructure it into named variables — skip nothing
// Skip the price, only get order id, name, items and status
// Get only the first item from the items array using nested destructuring
// Print a clean receipt using the destructured values

// let  [id,name,products,price,status] = apiResponse;


// let  [id,name,products, ,status] = apiResponse;

let  [id,name,[one] ] = apiResponse;

console.log(`order id is` ,id);
console.log(`name of customer is `,name);
// console.log(`he purchased `,products);
// console.log(`total of `,price);
// console.log(`order is `,status);
console.log(`first product is `,one);



