const user = {
    name : "Mubasshir",
    age : 25,
    address : {home :"right here", pin : 492001 },
    isAdult : true,
   greet(){console.log(`hi ${this.name} i am AI` );
    console.log(this)}
   

} 
console.log(user.name);
console.log(user["name"]);

console.log(user.address);
console.log(user.address.home);

console.log(user.greet());

user.email = "abc@gmail.com";

console.log(user.greet());

delete user.age

console.log(user.greet());

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
  //



  // destructuring and spread

//   const clone = {...user}; if want to add somethi n g

  const clone = {...user, blood : "b+"};


  console.log(clone);
  

  // destructuring

  const {name ,address, isAdult, greet, } = clone;

  console.log(name);
    console.log(address);
  console.log(isAdult);
  console.log(greet);
//   console.log(greet());


/*Exactly what I warned about — `this` breaks when you destructure a method.

That giant output is the **global object** — when `this` loses its object context, it falls back to the global scope (the entire Node.js environment).

**The fix — always call methods directly on the object:**

```js
user.greet(); // ✅ this = user
```

**Not through destructuring:**
```js
const { greet } = user;
greet(); // ❌ this = global object
```

You just saw exactly why `this` is tricky in JS. Good experiment.*/