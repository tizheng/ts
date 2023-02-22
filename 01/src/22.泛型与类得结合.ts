{
  class name<T> {
    data: T[] = []
    protected push(...args: T[]) {
      return this.data.push(...args)
    }
    public shift(...args: T[]) {
      return this.push()
    }
  }

  const nameEL = new name<string>()
  nameEL.shift('123', '456')

  type User = { name: string }
  const user:User = {name:"12"}
  const nameELS = new name<User>()
  nameELS.shift(user)
}
