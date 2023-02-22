// const moveDecorator: ClassDecorator = (target: Function) => {
//   target.prototype.getposition = (): { x: number; y: number } => {
//     return { x: 100, y: 110 }
//   }
// }
// @moveDecorator
// class Tank {
//   // public getposition() {}
// }
// @moveDecorator
// class Player {}
// const tank = new Tank()
// console.log((tank as any).getposition())
// const player = new Player()
// console.log((player as any).getposition())

//装饰器叠加
const playmusic: ClassDecorator = (target: Function) => {
  target.prototype.playm = (): void => {
    console.log('play')
  }
}
const moveDecorator: ClassDecorator = (target: Function) => {
  target.prototype.getposition = (): { x: number; y: number } => {
    return { x: 100, y: 110 }
  }
}
@moveDecorator
@playmusic
class Tank {
  public getposition() {}
}

//类装饰器

{
  const test2: MethodDecorator = (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    // console.log(descriptor.value)
    descriptor.value = () => {
      console.log('456')
    }
  }

  class Test4 {
    @test2
    public show() {
      console.log('123')
    }
  }
  const t = new Test4()
  t.show()
}
