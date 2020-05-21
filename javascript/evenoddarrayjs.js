arr = [];
evearr = [];
oddarr = [];
var value,i;
var limit = Number(prompt("Enter the limit"));
for(i=0;i<limit;i++)
{
    value = prompt("value");
    arr.push(value);
}
console.log("ARRAY")
for(item of arr)
{
    console.log(item);
}
for(item of arr)
{
    if(item%2==0)
    {
        evearr.push(item);
    }
    else
    {
        oddarr.push(item);
    }
}
console.log("EVEN ARRAY")
for(item of evearr)
{
    console.log(item);
}
console.log("ODD ARRAY")
for(item of oddarr)
{
    console.log(item);
}