class Employee
{
    constructor(id,nme,sal)
    {
        this.id = id;
        this.nme = nme;
        this.sal=sal;
    }

}
ob = new Employee(1,"Anu",10000);
ob1 = new Employee(2,"Abhi",2000);
ob2 = new Employee(3,"Ajay",50000);
ob3 = new Employee(4,"Raju",6000);
arr=[];
arr.push(ob);
arr.push(ob1);
arr.push(ob2);
arr.push(ob3);
console.log("After sorting :")
// for(i=0;i<arr.length;i++)
// {
//     for(j=i+1;j<arr.length;j++)
//     {
//         if((arr[i].sal)>(arr[j].sal))
//         {
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// for(ob of arr)
// {
//     console.log(ob);
// }
val=arr.sort((e1,e2)=>(e1.sal)-(e2.sal))

val.forEach(o=>console.log(o.nme));