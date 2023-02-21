export default {}

class Person {
  public name: string
  private email: string
  protected phone: string

  constructor(name:string,email:string,phone:string){
    this.name = name
    this.email = email
    this.phone = phone
  }
  say():void{
    console.log(this.name);
  }
}
const p = new Person('21',"1","1")
p.say()

class Person2 extends Person {
  constructor(name:string,email:string,phone:string){
    super(name,email,phone)
  }
  say(): void {
    //email为私有属性，只能在父类访问
    // console.log(this.email);
  }
}

//readonly
class Person3 {
  readonly name:string = "JSON"
  readonly age:string
  constructor(age:string){
    this.age = age
  }
  

}
