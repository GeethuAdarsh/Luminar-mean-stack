var num1 = Number(prompt("Enter the  first number"));
var num2 = Number(prompt("Enter the second number"));
var num3 = Number(prompt("Enter the  third number"));
console.log("Number 1 = "+num1);
console.log("Number 2 = "+num2);
console.log("Number 3 = "+num3);
if((num1>num2)&(num1>num3))
{
        if(num2>num3)
        {
            console.log(num2+" is second largest");
        }
        else
        {
            console.log(num3+" is second largest");
        }
        
}
else if((num2>num1)&(num2>num3))
{

    if(num1>num3)
    {
        console.log(num1+" is second largest");
    }
    else
    {
        console.log(num3+" is second largest");
    }
    
}
else if((num1===num2)&(num2===num3))
{
    console.log("Numbers are equal");
}
else
{
    if(num2>num1)
    {
        console.log(num2+" is second largest");
    }
    else
    {
        console.log(num1+" is second largest");
    }
    
}