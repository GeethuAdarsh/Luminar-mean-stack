/*var num = Number(prompt("Enter the number"));
var res=0;
var rev=0;
var newnum = 0;
console.log("Number : "+num);
while(num>0)
{
    newnum=num%10;
    res=res*10+newnum;
    num=parseInt(num/10);
}
console.log("Reverse : "+res);*/
var num = Number(prompt("Enter the number"));
console.log("Number is "+num);
var res=0;
var rev=0;
var newnum=0;
var orgnl=num;
while(num>0)
{
    newnum=num%10;
    res=res+(newnum**3);
    num=parseInt(num/10);
}
console.log("Sum  : "+res);
if(orgnl===res)
{
    console.log(orgnl+" is an armstrong number");
}
else{
    console.log(orgnl+" is  not an armstrong number");  
}