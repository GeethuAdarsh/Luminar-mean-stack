/*arr = [];
var limit = Number(prompt("Enter the limit"));
for(i=0;i<limit;i++)
{
    value = Number(prompt("Enter the value"));
    arr.push(value);    
}
console.log("ARRAY")
for(item of arr)
{
    console.log(item);
}*/
/*console.log("Sum");
arrsum(arr);
console.log("Double");
var res1 = arrdouble(arr);
console.log(res1);
function arrsum(arr1)
{   var sum=0;
    for(item of arr1)
    {
        sum = sum+item;
    }
    console.log(sum);
}
function arrdouble(arr1)
{   arr2 = [];
    for(item of arr1)
    {
        var res = item*2;
        arr2.push(res);
    }
    return arr2;
}*/

/*
var data = arr.reduce((a,b)=>(a+b));
console.log(data);*/

/*
f=a=>(a**2);
var res = arr.map(f);
console.log(res);*/
/*
console.log(arr.map(a=>(a**2)));*/


/*var arr = ["raju","ammu","rama","aani"];
console.log(arr.map(a=>(a.toUpperCase())));
console.log(arr.filter(a=>(a.charAt(0)=='a')));*/

var arr=[10,11,12,13,24];
console.log("array");
console.log(arr);
console.log("even numbers");
console.log(arr.filter(no=>no%2==0));
console.log("sum of array elements");
console.log(arr.reduce((a,b)=>(a+b)));
