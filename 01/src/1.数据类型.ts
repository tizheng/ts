export default {}
//基本数据类型
const str: string = '123'
//只能未number类型
let num: number = 123
// num="456"
num = 456
num = 0x123
//布尔值
let flag: Boolean = false
//模板字符串
let templateStr = `123456${str}`
//数组
let array: String[]
array = ['test1', 'test2', 'test3']
//不能赋值其他类型
// array = [123]
//数组第二种方法
let array2: Array<string>
array2 = ['test1', 'test2', 'test3']
//数组组合类型
let array3: (String | number)[]
array3 = ['test1', 'test2', 'test3', 123]
//数组任意类型
let array4: any[]
array4 = ['test1', 'test2', 'test3', 123, true]
//-------------------------------------------------------
//元组类型
//保存定长长度的数组和数据类型,数据类型与数据必须一对一
let tup: [string, number, boolean]
tup = ['123', 123, true]
//----------------------------------------------------------------
//any类型定义与使用
//场景一，用户输入的值类型是不确定的
let input: any = ['123', 123, [123], true]
//场景二 数组组合类型
let anyArray: any[]
anyArray = ['test1', 'test2', 'test3', 123, true]
//场景三改写现行代码
let code: any = 4
code.tofixed()
//----------------------------------------------------------------
//void类型
//函数没有返回值时,ts中只有null和undefined可以赋值给void类型（关闭严格模式）
// function name():void {
//   console.log("123");
// }
// name()
let value: void
// value = 123
value = null
value = undefined
//----------------------------------------------------------------
//null和undefined也可以作为类型
let tesy: null
let tesy2: undefined
//----------------------------------------------------------------
//never类型
//1.抛出异常
error('test')
function error(message: string): never {
  throw new Error(message)
}
//2.推断类型
function nameEls(params: string) {
  return error('y')
}
//3.无法终止，比如死循环
function stop(params: string): never {
  while (true) {}
}
//----------------------------------------------------------------
//对象类型
// let obj: object = {
//   name: 'test',
// }
//----------------------------------------------------------------
//枚举类型
//本质是数值类型，用于标识固定的取值
enum Gender {
  Male = 5,
  Female,
}
let val: Gender
val = 0
val = 1
//顺序执行且两个变量只能递增
console.log(Gender.Male)
console.log(Gender.Female)
//输出5，6，如果只赋值Female，则输出0，xxx，如果二者都赋值则正常输出
//----------------------------------------------------------------
//bignt表示很大的数
const bigNum: bigint = BigInt(100)
//---`-----------------------------------------------
//symbol表示全局唯一引用，只能定义一个
const tt = Symbol('name')
const tt2 = Symbol('name')
//  if (tt === tt2) {
//  }
//----------------------------------------------------------------
