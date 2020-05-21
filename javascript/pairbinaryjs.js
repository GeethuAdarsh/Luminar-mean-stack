arr = [];
var i,j,val;
var temp=0;
var limit = Number(prompt("Enter the limit"));
for(i=0;i<limit;i++)
{
    var val = Number(prompt("Enter the values"));
    arr.push(val);
}
var num = Number(prompt("Enter the number to check"));
console.log("Before Sorting");
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

for(i=0;i<limit;i++)
{
    ele = num-arr[i];
    var low=i+1;
    var high=limit-i-1;
    var flag=0;
    var mid=parseInt((low+high)/2);
    while(low<high)
    {   
        if(ele>arr[mid])
        {
            low=mid+1;
        }
        else if(ele<arr[mid])
        {
            high=mid-1;
        }
        else if(ele==arr[mid])
        {   
            console.log("("+(arr[i])+","+(arr[mid])+")");
            break;
        }
        else
        {
            flag++;
        }
        mid=parseInt((low+high)/2); 
    }

}