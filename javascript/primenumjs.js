/*var limit = Number(prompt("Enter the limit"));
var i;
var count=0;
console.log("Number is "+limit);
for(i=2;i<limit/2;i++)
{
    if(limit%i===0)
    {
        count++;
    }
}
if(count>0)
{
    console.log("Number is not prime");
}
else
{
    console.log("Number is  prime");
}*/
var lowlimit = Number(prompt("Enter the lower limit"));
var uplimit = Number(prompt("Enter the upper limit"));
var i;
var count=0;
var limit=0;
var sum=0;
while(lowlimit<=uplimit)
{
    limit=lowlimit;
    for(i=2;i<limit;i++)
    {
        if(limit%i==0)
        {
         count++;
        }
    }
    if(count==0)
    {
        count=0;
        console.log(lowlimit);
        sum = sum+lowlimit;
        lowlimit++;
        
    }
    else
    {
        count=0;
        lowlimit++;
    }
}
console.log("Sum is "+sum);
