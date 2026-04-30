let fruits = ["mango", "apple", "banana", "orange", "cherry"];

for (const fruit of fruits) {
    console.log(`the fruit is ${fruit}`);
}

fruits.forEach(fruit => {
     console.log(`foreach the fruit is ${fruit}`);
});
 
let user = { "name" : "rashid",
    "age" : 22
}

for (const key in user) {
    console.log(key + " = " + user[key]);    
    
    
    
}