/*class Person
{
    setValues(age,name)
    {
        this.age=age;
        this.name=name;    
    }
    printValues()
    {
        console.log(this.age);
        console.log(this.name)    
    }
}

ob = new Person();
ob.setValues(25,"Anu");
ob.printValues();
ob1 = new Person();
ob1.setValues(29,"Ammu");
ob1.printValues();*/


/*STUDENT PROGRAM*/

class Student
{
    setValues(rollno,name,age,totalmarks)
    {
        this.rollno=rollno;
        this.name=name;
        this.age=age;
        this.totalmarks=totalmarks;
    }
    printValues()
    {
        console.log("Roll no :"+(this.rollno));
        console.log("Name:"+(this.name));
        console.log("Age:"+(this.age));
        console.log("Total Marks :"+(this.totalmarks));
    }
}
arr = [];
ob=new Student();
console.log(ob.age);
console.log("STUDENT-1");
ob.setValues(1,"AMMU",18,39);
ob.printValues();
arr.push(ob);
ob1=new Student();
console.log("STUDENT-2");
ob1.setValues(2,"Anu",18,82);
ob1.printValues();
arr.push(ob1);
ob2=new Student();
console.log("STUDENT-3");
ob2.setValues(3,"Balu",18,34);
ob2.printValues();
arr.push(ob2);
ob3=new Student();
console.log("STUDENT-2");
ob3.setValues(4,"Diya",18,76);
ob3.printValues();
arr.push(ob3);
/*console.log("Students who scored marks more than 50:");
res=arr.filter(o=>(o.totalmarks>50));
for(ob of res)
{
    console.log(ob.name+" "+ob.totalmarks);
}
console.log("Names to Uppercase");
res2=(arr.map(o=>((o.name.toUpperCase()))));
for(ob of res2)
{
    console.log(ob);
}*/