class Bank
{
    constructor(nme,age,bankname,acntno,acnttype)
    {
        this.nme=nme;
        this.age=age;
        this.bankname=bankname;
        this.acntno=acntno;
        this.acnttype=acnttype;
        this.bal=1000;
    }
    printacc()
    {
        console.log("Name :"+this.nme);
        console.log("Age :"+this.age);
        console.log("Bank :"+this.bankname);
        console.log("Account no :"+this.acntno);
        console.log("Account type :"+this.acnttype);
        console.log("Balance : "+this.bal);

    }
    acntdeposit(bal)
    {
        this.bal=this.bal+bal;
        console.log("DEPOSIT");
        console.log("Account no. "+this.acntno);
        console.log("New balance :"+this.bal)
    }
    acntwithdraw(bal)
    {
        
        console.log("WITHDRAWAL");
        if((this.bal)>=(this.bal-bal))
        {
            console.log("Insufficient Balance");
        }
        else
        {
            this.bal=this.bal-bal;
            console.log("Account no. "+this.acntno);
            console.log("New balance :"+this.bal)
        }
    }
    balancecheck()
    {
        console.log("BALANCE CHECK");
        this.printacc();
    }
}
ob = new Bank("Anu",19,"SBI",123456,"Savings");
ob.printacc();
ob.acntdeposit(30000);
ob.acntwithdraw(2000);
ob.balancecheck();
ob1 = new Bank("Ammu",21,"Federal bank",100264,"Savings");
ob1.printacc();
ob1.acntdeposit(50000);
ob1.acntwithdraw(200000);
ob1.balancecheck();