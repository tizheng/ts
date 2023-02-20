//手动指定一个值的类型
// function nameEls(params:string|number) {
//   console.log(params.length);
// }

 function nameEls(params:string|number) {
   console.log( (params as string).length);
   console.log( (<string>params).length);
 }