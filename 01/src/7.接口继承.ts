//单继承
interface interface_name_extens {
  name: string
}
interface interface_name_extens2 extends interface_name_extens {
  age: number
}
let interface_name_extensName: interface_name_extens2 = {
  name: '',
  age: 18,
}


//多继承
interface father {
  name: string
}
interface mother {
  age:number
}
interface son extends father,mother {
  s:''
}
let friend:son  = {
  s:'',
  name:'',
  age:18
}


