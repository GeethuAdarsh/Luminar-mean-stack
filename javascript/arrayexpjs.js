arr = [];
var val,i;
var limit = Number(prompt("Enter the limit"));
for(i=0;i<limit;i++)
{
    val = Number(prompt("Enter the value"));
    arr.push(val);
}
console.log("ARRAY");
for(item of arr)
{
    console.log(item);
}
console.log("RESULT");
for(i=0;i<limit;i++)
{
    res = arr[i]**(i+1);
    console.log(res);
}