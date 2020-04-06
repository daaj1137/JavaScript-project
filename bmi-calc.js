//My first BMI-calculator
let height = 1.85;
let weight = 85;
const bmi = weight/(height * height);
const result = bmi;

if (bmi < 18.5){
    console.log("Underweight")
} else if (bmi > 18.5 && bmi < 24.9){
    console.log("Normal weight")
} else if (bmi >= 30){
    console.log("Obesity")
} 

console.log("Your BMI is:" + result)
