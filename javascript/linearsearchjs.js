arr = [];
var i,j,val;
var temp=0;
var limit = Number(prompt("Enter the limit"));
for(i=0;i<limit;i++)
{
    var val = Number(prompt("Enter the values"));
    arr.push(val);
}
var ele = Number(prompt("Enter the value to be checked"));
console.log("Array")
for(i of arr)
{
    console.log(i);
}
for(i=0;i<limit;i++)
{
    if(arr[i]==ele)
    {
       console.log(arr[i]+" is found at position "+(i+1)) 
    }
}
