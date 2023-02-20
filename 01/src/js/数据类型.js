// export default {}
var str = '123';
//只能未number类型
var num = 123;
// num="456"
num = 456;
num = 0x123;
//布尔值
var flag = false;
//模板字符串
var templateStr = "123456".concat(str);
//数组
var array;
array = ['test1', 'test2', 'test3'];
//不能赋值其他类型
// array = [123]
//数组第二种方法
var array2;
array2 = ['test1', 'test2', 'test3'];
//数组组合类型
var array3;
array3 = ['test1', 'test2', 'test3', 123];
//数组任意类型
var array4;
array4 = ['test1', 'test2', 'test3', 123, true];
//-------------------------------------------------------
//元组类型
//保存定长长度的数组和数据类型,数据类型与数据必须一对一
var tup;
tup = ['123', 123, true];
//----------------------------------------------------------------
//any类型定义与使用
//场景一，用户输入的值类型是不确定的
var input = ['123', 123, [123], true];
//场景二 数组组合类型
var anyArray;
anyArray = ['test1', 'test2', 'test3', 123, true];
//场景三改写现行代码
var code = 4;
code.tofixed();
//----------------------------------------------------------------
//void类型
//函数没有返回值时,ts中只有null和undefined可以赋值给void类型（关闭严格模式）
// function name():void {
//   console.log("123");
// }
// name()
var value;
// value = 123
value = null;
value = undefined;
//----------------------------------------------------------------
//null和undefined也可以作为类型
var tesy;
var tesy2;
//----------------------------------------------------------------
//never类型
//1.抛出异常
error('test');
function error(message) {
    throw new Error(message);
}
//2.推断类型
function nameEls(params) {
    return error('y');
}
//3.无法终止，比如死循环
function stop(params) {
    while (true) {
    }
}
