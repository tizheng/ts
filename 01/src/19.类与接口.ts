//使用{}或者export default {} 起到scoped作用，防止命名重复，

{
  //抽象类中可以没有抽象方法，抽象类和接口是用来约束得,接口可以多继承,只要继承了该接口，就得严格按照接口中约束得属性和方法
  interface test {
    name: string
    age: number
  }
//   abstract class testEl {
//     abstract name:string
//     abstract store:number
//   }
//   interface test2 {
//     email:string
//   }
//   class testEls extends testEl implements test,test2 {
//     name:'123'
//     age:18
//     store: 123
//     email:'123@example.com'
//   }
// }

class user {
  _info:test
  constructor(user:test){
    this._info = user
  }
  get info():test{
    return this._info
  }
}
}
