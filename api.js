async function addProduct() {
  try {
    const response = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Leather Bag", price: 999 })
    });
    const data = await response.json();
    console.log(data);
  } catch(error) {
    console.log(error);
  }
}

addProduct();