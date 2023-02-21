//static
export default {}
class Test {
  static nameEl: string
  static say():void {
    console.log(Test.nameEl);
    
  }
}
Test.nameEl = "123"
Test.say()

class Person{}
let p = new Person()
console.log(p instanceof Person);

class Student extends Person {}

const stu = new Student()
console.log(stu instanceof Student);

