var limit = Number(prompt("Enter the limit"));
var first=0;
var second=1;
var sum=0;
console.log("FIBANOCCI SERIES");
if(limit==1)
{
    console.log(first);
    
}
else if(limit==2)
{
    console.log(first);
    console.log(second);

}
else
{
    console.log(first);
    console.log(second);
    sum=first+second;
    while(limit>2)
    {
        
        console.log(sum);
        first=second;
        second=sum;
        sum=sum+first;
        limit--;
    }
}