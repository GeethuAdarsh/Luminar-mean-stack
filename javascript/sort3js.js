var num1 = Number(prompt("Enter the  first number"));
var num2 = Number(prompt("Enter the second number"));
var num3 = Number(prompt("Enter the  third number"));
var large;
var second;
var third;
console.log("Number 1 = "+num1);
console.log("Number 2 = "+num2);
console.log("Number 3 = "+num3);
if((num1>num2)&(num1>num3))
{
        lar = num1;
        if(num2>num3)
        {
            second=num2;
            third=num3;
        }
        else
        {
            second=num3;
            third=num2;
        }
}
else if((num2>num1)&(num2>num3))
{
        lar = num2;
        if(num1>num3)
        {
            second=num1;
            third=num3;
        }
        else
        {
            second=num3;
            third=num1;
        }
}
else if((num1===num2)&(num2===num3))
{
    console.log("Numbers are equal");
}
else
{
        lar = num3;
        if(num2>num1)
        {
            second=num2;
            third=num1;
        }
        else
        {
            second=num1;
            third=num2;
        }
}
console.log(third+" "+second+" "+lar);