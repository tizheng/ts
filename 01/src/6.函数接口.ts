//接口在函数中使用
interface interface_nameEls {
  (a:number,b:number):number;
}
 let interface_name_str2:interface_nameEls = (a:number,b:number)=>a+b
 interface_name_str2(10,20)

 //接口在数组中使用
 interface interface_nameElss {
  //index代表索引
  [index:number]:string;
}
let ary:interface_nameElss
ary = ["123","456"]
let str:string = ary[0]
console.log(str);





