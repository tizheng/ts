interface mix {
  (str: string): string
  inter: string
  reset(): void
}
function getMix(): mix {
  let counter = <mix>function (str: string) {}
  ;(counter.inter = '123'), (counter.reset = () => {})
  return counter
}
// export {};
