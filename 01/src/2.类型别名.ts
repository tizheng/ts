//类型别名，
type test = 'test'
let one: test
one = 'test'
// one = 123

type foo = {
  name: string
  age: number
}
let foo2: foo = {
  name: 'zs',
  age: 18,
}

type fun = (a: string, b: number) => number
// let func:fun = (a: string, b: number) =>a
let func:fun = (c: string, d: number) =>d
