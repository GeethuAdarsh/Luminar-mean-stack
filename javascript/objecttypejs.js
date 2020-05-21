 /*var str = "ABABC";
 for(i=0;i<str.length;i++)
 {
     var a = str.charAt(i);
     for(j=i+1;j<str.length;j++)
     {
         var b = str.charAt(j);
         if(a==b)
         {
             console.log(a);
             flag=1;
            
         }
     }
     if(flag=1)
     {
         break;
     }
 }*/


//first recursive character

/*var str="ababc"
ob={}

for(k of str){
if(k in ob){

    console.log(k+"is first recursive")
    break;
}
else{
    ob[k]=1;
}

}*/





//word count

var str = "hello hai hello hai good hello hai hello good hai";
words = str.split(" ");
ob={};
arr=[];
for(k of words)
{
    if(k in ob)
    {
     ob[k]+=1;   
    }
    else
    {
      ob[k]=1;   
    }
}
for(k in ob)
{
    console.log(k+":"+ob[k]);
    arr.push(ob[k]);
}
val = arr.sort((a,b)=>(a-b));
highcount = arr[arr.length-1];
for(k in ob)
{
    if(ob[k]==highcount)
    {
        console.log("word having highest count is "+k);
    }
}
