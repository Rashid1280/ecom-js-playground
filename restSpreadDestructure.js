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

