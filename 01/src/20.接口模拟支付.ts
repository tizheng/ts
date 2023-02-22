interface pay {
  pay(price: number): void
}

class alipy implements pay {
  pay(price: number): void {
    console.log('支付宝')
  }
}
class wechat implements pay {
  pay(price: number): void {
    console.log('微信')
  }
}
function payFor(type: string, price: number) {
  let pay:pay
  switch (type) {
    case 'chat':
      pay = new wechat()
      break
    case 'alipay':
      pay = new alipy()
      break
  }
  pay.pay(10)
}
