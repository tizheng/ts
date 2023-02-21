type voidFunc = () => void
//类型可强制返回值，这个返回值是有效的
let fun2: voidFunc = function () {
  return '123'
}

//函数中指定是无效的
function foo(): void {}

