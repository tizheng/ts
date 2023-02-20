function test(msg:string) {
  console.log(msg.length);
}

//ts在编译阶段会进行类型检测
test('1')
// test()
// test('3')

console.log("test");