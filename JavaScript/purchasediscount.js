let purchaseValue = Number(prompt("What is your purchase's value?"));
let discount

if (purchaseValue >= 200) {
    discount = (purchaseValue / 100) * 20;
    purchaseValue -= discount;
    console.log("Your purchase had a 20% discount. Your total purchase is now", purchaseValue);
} else if (purchaseValue >= 100) {
    discount = (purchaseValue / 100) * 10;
    purchaseValue -= discount;
    console.log("Your purchase had a 10% discount. Your total purchase is now", purchaseValue);
} else {
    console.log("Your total purchase is", purchaseValue);
}