export default {}
class Test {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  say(): void {
    console.log(this.name, this.age)
  }
}

const testEl = new Test('12', 10)

class Test2 extends Test {
  score: string
  constructor(score: string, name: string, age: number) {
    super(name, age)
    super.say()
    this.score = score
  }
  say(): void {
   console.log(this.name, this.score,this.age);
    
  }
}

const test2 = new Test2("123","456",18)
test2.say()
