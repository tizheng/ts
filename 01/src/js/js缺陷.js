function test(msg) {
  console.log(msg.length);
}
test('1')
//error，下面不执行
test()
test('3')
console.log("test");