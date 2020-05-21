 arr=[];
 var value;
 var sum=0;
 var  limit = Number(prompt("Enter the limit"));
 for(i=0;i<limit;i++)
 {
     value=prompt("value");
     arr.push(value);
     sum=sum+Number(value);
 }
 console.log("ARRAY")
 for(i of arr)
 {
     console.log(i);
 }
console.log("SUM : "+sum)