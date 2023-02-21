//都可以描述属性和方法

type x = 123
type y = {
  name: '456'
}
interface z {
  name: '789'
}

//都可以扩展
// type x2 = {
//   name: string
// }
// type y2 = x2 & {
//   age: number
// }
// let x3: y2 = {
//   name: '123',
//   age: 10,
// }
// interface x2 {
//   name: string
// }
// interface y2 extends x2 {
//   age: number
// }
// let x3: y2 = {
//   name: '123',
//   age: 10,
// }

//不同点
//interface只能对象操作，type可以对任何类型操作
type age = number
type str = string | boolean
type arr = [string | number]
interface testELs {
  name: string
}
//type不会进行合并，interface可以合并,也就是说type不能重名，interface可以重名，并且自动合并
// type x2  =  {
//   name:string
// }
// type x2 = {
//   age:number
// }
interface x2 {
  name: string
}
interface x2 {
  age: number
}

let x3: x2 = {
  name: 'd',
  age: 123,
}
