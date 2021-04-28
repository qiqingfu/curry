const curry = (...args: [Function, ...unknown[]]): Function => {
  const [func, ...surplusArgs] = args
  // 这个函数的返回值是一个联合类型
  // func 函数执行的返回值 | curry
  return function(...args: Array<unknown>) {
    const combineArgs = [...surplusArgs, ...args]
    if (combineArgs.length >= func.length) {
      return func.apply(null, combineArgs)
    } else {
      return curry(func, ...combineArgs)
    }
  }
}

export default curry
