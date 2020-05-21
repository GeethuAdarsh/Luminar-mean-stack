/*var i = 0;
console.log("0 to 10")
while(i<=10)
{
    console.log(i);
    i=i+1;
}
console.log("10 to 0")
i=10
while(i>=0)
{
    console.log(i);
    i=i-1;
}*/
/*var limit=Number(prompt("Enter the limit"));
var even=0;
var i=0;
var sum=0;
while(even<=limit)
{
    i=even;
    if(i%2==0)
    {
        console.log(i);
        sum=sum+i;
    }
    even++;
   
}
console.log("Sum is "+sum)*/
var num=Number(prompt("Enter the number"))
var num1=1;
var fact=1;
while(num1<=num)
{
    fact=fact*num1;
    num1=num1+1;
}
console.log("FACTORIAL OF "+num+" is "+fact);