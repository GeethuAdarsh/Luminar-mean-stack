$(function() {
    $( "#datepicker-13" ).datepicker();
    $( "#datepicker-13" ).datepicker("show");
 });
function age(val)
{
   
    values=val.split("/");
    var m=values[0];
    var d=values[1];
    var y=values[2];
    var today = new Date();
    var d1 = today.getDate();
    var m1 = today.getMonth() + 1   ; //January is 0!
    var y1= today.getFullYear();
    var age=y1-y;
    if(((m1-m)>=0)&&((d1-d)>=0))
    {
        
        document.getElementById("age").innerHTML="YOUR AGE IS "+age;
    }
    else
    {
        age1=age-1;
        document.getElementById("age").innerHTML= "YOUR AGE IS "+age1;
    }
  
    
   
}


