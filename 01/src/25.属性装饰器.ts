{
  // const name:PropertyDecorator = (target: Object, propertyKey: string | symbol)=>{
  //   console.log(target);
  //   console.log(propertyKey);
  // }
  // class Test {
  //   @name
  //   public show(){}
  // }

  // let t = new Test();
  // t.show()

  const name = (value: string): PropertyDecorator => {
    return (target: Object, propertyKey: string | symbol) => {
      Object.defineProperty(target, propertyKey, {
        get() {
          return value
        },
        set(v) {
          value = v
        },
      })
    }
  }

  class T {
    @name('456')
    public name: string
  }

  const t = new T()
  console.log(t.name);
  
}
