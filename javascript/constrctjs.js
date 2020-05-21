class Person
{
    constructor(age,name,sal)
    {
        this.age=age;
        this.name=name;
        this.sal=sal;    
    }
    printValues()
    {
        console.log("Age :"+this.age);
        console.log("Name :"+this.name);
        console.log("Salary :"+this.sal);    
    }
    
}

ob = new Person(18,"Anu",10000);
ob.printValues();
ob1 = new Person(20,"Abhi",20000);
ob1.printValues();

