//setting the property outside the class
// class person{
//     fullname=undefined
//     age=undefined
//     rollno=undefined
// }
// let amol=new person
// amol.fullname="amol jagtap"
// console.log(amol.fullname)
// console.log(amol)


//setting the property at the time of object creation(constructor)

class person1{ 
    constructor(fullname,age,rollnumber)
    {
        this.fullname=fullname
        this.age=age
        this.rollnumber=rollnumber 
    }
    // display(){console.log(this.fullname)}
}
let chinmay=new person1 ("chinmay deshpande",30,23)
console.log(chinmay)

//using set method
class person2{
    setAge(age){
        this.age=age
    }
}
let rohan=new person2()
rohan.setAge(24)
console.log(rohan.age)
