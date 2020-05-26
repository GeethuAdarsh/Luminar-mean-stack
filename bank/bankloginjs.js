
class Login
{
    static account()
        {
            var acc={ 99980100: { name:"John" , mpin:"1010" , balance:"20000" } , 
                 99980101: { name:"Ann" , mpin:"1011" , balance:"30000" } , 
                 99980102: { name:"Sam" , mpin:"1012" , balance:"40000" } , 
                 99980103: { name:"Alex" , mpin:"1013" , balance:"50000" } , 
                 99980104: { name:"Anna" , mpin:"1014" , balance:"60000" } , 
                 99980105: { name:"Vandana" , mpin:"1015" , balance:"70000" } , 
               }
            var num=document.querySelector("#num").value;
            var pin=document.querySelector("#pin").value;
            localStorage.setItem("accno", num);
            localStorage.setItem("pin1",pin);
            if(num in acc)
             {
                var accpin=acc[num]["mpin"];
                if(accpin==pin)
                {
                    swal("Login successful")
                    .then((value) => {
                    window.location.href="/home/adarsh/Desktop/luminar mean stack/css files/userhome.html";
                     });
                    /*var accname=acc[num]["name"];
                    var bal=acc[num]["balance"]
                    swal(accname , "Balance  is "+String(bal))*/
                }
                else
                {
                    swal("Login Failed", "error");
                }
            }  
            else
            {
                 swal("invalid Account Number", "error");
            }   
        }   
}
class Trans
{

    static withdraw()
    {   
        var acc={ 99980100: { name:"John" , mpin:"1010" , balance:"20000" } , 
                 99980101: { name:"Ann" , mpin:"1011" , balance:"30000" } , 
                 99980102: { name:"Sam" , mpin:"1012" , balance:"40000" } , 
                 99980103: { name:"Alex" , mpin:"1013" , balance:"50000" } , 
                 99980104: { name:"Anna" , mpin:"1014" , balance:"60000" } , 
                 99980105: { name:"Vandana" , mpin:"1015" , balance:"70000" } , 
               }
        var amt1=document.querySelector("#amt").value;
        var num1=localStorage.getItem("accno"); 
        var pin2=localStorage.getItem("pin1");
        console.log(pin2);
        var pin3=document.querySelector("#pin").value;
        console.log(pin3);
        if(pin2==pin3)
        {
            if(amt1<=acc[num1]["balance"])
            {
                var amt2=acc[num1]["balance"];
                var bal=Number(amt2)-Number(amt1);
                acc[num1]["balance"]=bal;
                swal(acc[num1]["name"],"Current Balance is"+acc[num1]["balance"]);
            }
            else
            {
                swal(acc[num1]["name"],"Insufficient Balance");
            }
        }
        else
        {
            swal("Invalid MPIN" , "error");
        }
    }
    static deposit()
    {   
        var acc={ 99980100: { name:"John" , mpin:"1010" , balance:"20000" } , 
                 99980101: { name:"Ann" , mpin:"1011" , balance:"30000" } , 
                 99980102: { name:"Sam" , mpin:"1012" , balance:"40000" } , 
                 99980103: { name:"Alex" , mpin:"1013" , balance:"50000" } , 
                 99980104: { name:"Anna" , mpin:"1014" , balance:"60000" } , 
                 99980105: { name:"Vandana" , mpin:"1015" , balance:"70000" } , 
               }
        var amt1=document.querySelector("#amt").value;
        var num1=localStorage.getItem("accno"); 
        var pin2=localStorage.getItem("pin1");
        var pin3=document.querySelector("#pin").value;
        var accpin=acc[num1]["mpin"];
        var amt2=Number(acc[num1]["balance"]);
        if(pin2==pin3)
        {
            if(amt1<=acc[num1]["balance"])
            {
                var amt2=acc[num1]["balance"];
                var bal=Number(amt2)+Number(amt1);
                acc[num1]["balance"]=bal;
                swal(acc[num1]["name"],"Current Balance is"+acc[num1]["balance"]);
            }
           
        }
        else
        {
            swal("Invalid MPIN" , "error");
        }
    }
    static balance()
    {
        var acc={ 99980100: { name:"John" , mpin:"1010" , balance:"20000" } , 
                 99980101: { name:"Ann" , mpin:"1011" , balance:"30000" } , 
                 99980102: { name:"Sam" , mpin:"1012" , balance:"40000" } , 
                 99980103: { name:"Alex" , mpin:"1013" , balance:"50000" } , 
                 99980104: { name:"Anna" , mpin:"1014" , balance:"60000" } , 
                 99980105: { name:"Vandana" , mpin:"1015" , balance:"70000" } , 
               }
        var num1=localStorage.getItem("accno"); 
        var pin2=localStorage.getItem("pin1");
        var pin3=document.querySelector("#pin").value;
        if(pin2==pin3)
        {
                swal(acc[num1]["name"],"Current Balance is"+acc[num1]["balance"]);
           
        }
        else
        {
            swal("Invalid MPIN" , "error");
        }
    }
}
