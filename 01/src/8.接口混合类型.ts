interface mix {
  (str: string): string
  inter: string
  reset(): void
}
function getMix(): mix {
  let counter = function (str: string) {} as mix
  counter.inter = '123',
  counter.reset = () => {}
  return counter
}
// export {};
