async function order() {
    try{
        const response = await fetch("https://dummyjson.com/products/1 ");
        const data = await response.json();
        console.log(data.stock);
        
    }
    catch(error){
console.log(error);

    }
}

order();
  


const myPromise = new Promise((resolve, reject) => {
  let success = true;
  
  if(success) {
    resolve("Order confirmed!");
  } else {
    reject("Order failed!"); 
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error)); 


  ////

  // for fetch (no need  in modern code writing stick to async/await)
function getOrder() {
  fetch("https://dummyjson.com/products/1")
    .then(response => response.json())
    .then(data => console.log(data.title))
    .catch(error => console.log(error));
}