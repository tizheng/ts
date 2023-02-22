{
  type user = {
    name: string
    isLogin: boolean
    permissions: string[]
  }

  const userInfo: user = {
    name: 'zs',
    isLogin: true,
    permissions: ['store', 'ss'],
  }

  const test = (user: string[]): MethodDecorator => {
    return (
      target: Object,
      propertyKey: string | symbol,
      descriptor: PropertyDescriptor
    ) => {
      const method = descriptor.value
      const permissions = () => {
        user.every((k) => {
          userInfo.permissions.includes(k)
        })
      }
      if (userInfo.isLogin && permissions) {
        console.log('成功')
      } else {
        console.log('登陆失败')
      }
    }
  }
  class Article {
    @test(['string', 'ss'])
    show() {}
  }

  const a = new Article()
  a.show()
}
