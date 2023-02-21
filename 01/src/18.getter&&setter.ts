export default {}

class Ex {
  private test: string = 'test'
  get name(): string {
    console.log('get name')
    return this.test
  }
  set name(value) {
    console.log("set name");
    this.test = value
  }
}

const ex = new Ex()
ex.name = "123" 
console.log(ex.name);


