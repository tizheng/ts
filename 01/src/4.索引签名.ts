//一旦定义好接口，我们使用接口的时候就必须得一摸一样，但是参数是可变得,我们无法一开始就把所有得参数都约束好
interface name {
  name: string
  nickname: string
  age: number
  email: string
}
//虽然当前参数满足要求，但是后续加入新得参数就会报错
let info: name = {
  name: 'str',
  nickname: 'string',
  age: 123,
  email: 'string',
}
//第一种解决方案 不推荐
//  let infoEls = {
//    name: 'str',
//    nickname: 'string',
//    age: 123,
//    email: 'string',
//    next:'string'
//  }
//   info = infoEls

//第二种 类型断言
// info = {
//   name: 'str',
//   nickname: 'string',
//   age: 123,
//   email: 'string',
//   next:'string'
// } as name

//第三钟 索引签名
interface nameEls {
  name: string
  nickname: string
  age: number
  email: string
  [props: string]: any
}

let repeatName: nameEls = {
  name: 'str',
  nickname: 'string',
  age: 123,
  email: 'string',
  next: 'string',
  flag: true,
}
