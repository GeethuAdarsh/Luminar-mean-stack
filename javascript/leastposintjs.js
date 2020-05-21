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
temp=arr[0];
var j=1;
for(i=1;i<limit-1;i++)
{
    if(temp>0)
    {
        if((temp+1)!=arr[i])
        {
              console.log("Missing number is "+(temp+1));
              break;
        }
        else
        {
               temp++;
        }
    }
    else
    {
        temp=arr[j];
        j++;
    } 
}