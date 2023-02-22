{
const name:ParameterDecorator =  (target: Object, propertyKey: string | symbol, parameterIndex: number)=>{
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
}
  class Params {
    public show(@name id:string){}
  }

  const p = new Params()
  p.show("123")
}