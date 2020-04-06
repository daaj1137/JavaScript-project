let price = 150
let membership = "Gold"


if (price <= 100){
    discount = 0.05
    newPrice = (price - price * discount)
} else if (price >= 100  && price <= 200 && membership === "Gold"){
    discount = 0.08 
    newPrice = (price - price * discount)
} else if (price >= 200  && price <= 300 && membership === "Platinum"){
    discount = 0.12
    newPrice = (price - price * discount)
} else {
    discount = 0
    newPrice = price + discount
} console.log(" You have to pay " + newPrice + "$"+ 
"\n The original price is " + price + "$"
+ "\n The discounted amount is " + discount * 100 + "%")