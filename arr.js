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