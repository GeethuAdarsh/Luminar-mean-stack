var num1 = Number(prompt("Enter the  first number"));
var num2 = Number(prompt("Enter the second number"));
console.log("Number 1 = "+num1);
console.log("Number 2 = "+num2);
if(num1>num2)
{
    console.log(num1+" is larger");
}
else if(num2===num1)
{
     console.log("Numbers are equal");
}
else
{
    console.log(num2+" is larger");
}