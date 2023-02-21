export default {}

abstract class  test {
  abstract name: string
  abstract show(): string
  showName() {
    console.log(this.show())
  }
}
class Tt extends test {
  name: string = 'sstr'
  show(): string {
    return '123'
  }
}
const t = new Tt()
t.showName()
