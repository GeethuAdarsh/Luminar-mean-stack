arr = [];
var i,j,val;
var temp=0;
var limit = Number(prompt("Enter the limit"));
for(i=0;i<limit;i++)
{
    var val = Number(prompt("Enter the values"));
    arr.push(val);
}
console.log("Before Sorting")
for(i of arr)
{
    console.log(i);
}
for(i=0;i<limit;i++)
{
    for(j=i+1;j<limit;j++)
    {
        if(arr[i]>arr[j])
        {
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log("After Sorting")
for(i of arr)
{
    console.log(i);
}