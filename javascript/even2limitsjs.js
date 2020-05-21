var lowlimit = Number(prompt("Enter the lower limit"));
var uplimit = Number(prompt("Enter the upper limit"));
console.log("Even numbers are");
if(lowlimit==0)
{
    lowlimit++;
}
while(lowlimit<=uplimit)
{
    if(lowlimit%2==0)
    {
        console.log(lowlimit);

    }
    lowlimit++;
}