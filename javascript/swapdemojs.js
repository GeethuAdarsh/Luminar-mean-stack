var num1 = Number(prompt("Enter the first value"));
var num2 = Number(prompt("Enter the second value"));
console.log("BEFORE SWAPPING")
console.log("no1 = "+num1);
console.log("no2 = "+num2);
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1-num2;
console.log("AFTER SWAPPING")
console.log("no1 = "+num1);
console.log("no2 = "+num2);