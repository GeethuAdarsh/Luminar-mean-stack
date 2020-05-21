arr = [];
var value,i,a,b,j;
var limit = Number(prompt("Enter the limit"));

for(i=0;i<limit;i++)
{
    value = Number(prompt("value"));
    arr.push(value);
}
var ele = Number(prompt("Enter the element"));
console.log("ARRAY");
for(item of arr)
{
    console.log(item);
}
console.log("The pairs are :")
for(i in arr)
{
    for(j=i;j<limit;j++)
    {
        if(i!=j)
        {
            if((arr[i]+arr[j])==ele)
            {
                console.log("("+arr[i]+","+arr[j]+")");
            }
        }
    }
}
