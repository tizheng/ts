//默认参数
// const fun2 = function (a: number, b?: number): number {
//   return a
// }
// const res = fun2(10)
// console.log(res);
// const fun1: (a: number, b?: number) => number = (a, b) => b
// const res = fun1(20)
// console.log(res);

//剩余参数
const fun3 = function (a: number, b?: number, ...args: any[]): void {
  console.log(a)
  console.log(b)
  console.log(args)
}
fun3(10, 20, 123, 456, 789, 798, 89, 7, 98, 7)
