//INHERITANCE

/*class Parent
{
    print1()
    {
        console.log("PARENT");
    }
    print1(no)
    {
        console.log("PARENT1");
    }
}
class Child1 extends Parent
{
    print2()
    {
        console.log("CHILD 1");
    }
}
class Child2 extends Child1
{
    print3()
    {
        console.log("CHILD 2");
    }
}
console.log("Parent class");
ob = new Parent();
ob.print1();
console.log("Child1 class");
ob1 = new Child1();
ob1.print1();
ob1.print2();
console.log("Child2 class");
ob2 = new Child2();
ob2.print1();
ob2.print2();
ob2.print3();*/

//POLYMORHISM//


class Parent
{

    constructor(num)
    {
        this.num=num;
        console.log("inside parent");
        console.log(this.num);
    }
    print1()
    {
        console.log("PARENT");
    }
    print1(num)
    {
        console.log("PARENT1");
    }
}
class Child1 extends Parent
{
    constructor()
    {
        super(10);  //to call parent class constructor
        console.log("inside child");
       
    }
    print1()
    {
        
        console.log("CHILD");
    }
}
/*ob = new  Parent();
ob.print1();
ob.print1(10);*/   //method overloading
ob1 = new Child1();
ob1.print1();   //method overriding