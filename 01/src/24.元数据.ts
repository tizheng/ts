import 'reflect-metadata'
{

let hd = {
  name:"test"
}
Reflect.defineMetadata('test',{url:"ss"},hd,"name")
console.log(Reflect.getMetadata('test',hd,"name"));

}