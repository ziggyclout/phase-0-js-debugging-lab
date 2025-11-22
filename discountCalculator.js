function calculateDiscountedPrice(quantity, pricePerItem) {

    debugger; // pause at the very start
    console.log("Function called with prices:", prices, "and quantity:", quantity);

    let totalPrice = 0;
    console.log("Initial totalPrice:", totalPrice);

    // loop through each item to sum the price
    for (let i = 0; i < quantity; i++) {
        // loop starts at 0 (corrected)
        debugger; // inspect i and prices(i)
        console.log("Adding price of item ${i}:", prices(i));
        totalPrice += pricePerItem;
        console.log("totalPrice after adding item ${i}:", totalPrice);
    }
    
    // check and apply bulk discount
    debugger; // inspect totalPrice before discount
    if (quantity >= 10) {
        console.log("Applying 10% discount");
        totalPrice *=0.9;
    } else if (quantity >= 5){
        console.log("Applying 5% discount");
        totalPrice *= 0.95;
    } else {
        console.log("No discount applied");
    }

    debugger; // inspect totalPrice after discount
    console.log("Final totalPrice:", totalPrice);
    return totalPrice;
}



module.exports = calculateDiscountedPrice;