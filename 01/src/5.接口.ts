//定义 interface 接口名
//  interface interface_name {
//    name: string
//  }
//使用
// let interface_name_str: interface_name = {
//   name: 'str',
// }
//在函数中使用
// function foo({ name }: interface_name): void {
//   console.log('srt')
// }
// foo(interface_name_str)
//---------------------------------------------------------------
//可选属性
// interface interface_name {
//   name: string
//   age?: number
// }
// let interface_name_str: interface_name = {
//   name: '123',
// }
//只读属性
// interface interface_name {
//   name: string
//   readonly age: number
// }
// let interface_name_str: interface_name = {
//   name: '123',
//   age:123
// }
// interface_name_str.age = 123

//const vs readonly 
//变量赋值用const，属性用interface
const num = 123
// num =456
interface interface_name {
  name: string
}
interface interface_name {
  age:number
}
let interface_name_str:interface_name = {
  name:"",
  age:18
}
