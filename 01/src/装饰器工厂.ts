{
  //类装饰器工厂
  // const test = (type: string): ClassDecorator => {
  //   console.log(type)
  //   switch (type) {
  //     case 'Tank':
  //       return (target: Function) => {
  //         target.prototype.playgame = () => console.log('game started')
  //       }
  //     case 'player':
  //       return (target: Function) => {
  //         target.prototype.player = () => console.log('player started')
  //       }
  //   }
  // }
  // @test('Tank')
  // class Tank {
  //   public playgame() {}
  // }
  // const t = new Tank()
  // t.playgame()
  // @test('player')
  // class player {
  //   public player() {}
  // }
  // const p = new player()
  // p.player()

  //方法装饰器工厂

  const test = (time: number): MethodDecorator => {
    return (...args: any[]) => {
      const [, , descriptor] = args
      const method = descriptor
      descriptor.value = () => {
        setTimeout(() => {
          console.log('123')
        }, time)
      }
    }
  }

  class Test2 {
    @test(2000)
    public  reponse() {}
  }

  const t = new Test2()
  t.reponse()
}
