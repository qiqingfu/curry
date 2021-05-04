const curry = (...args: [Function, ...unknown[]]): Function => {
  const [func, ...surplusArgs] = args
  return function(...args: unknown[]) {
    const combineArgs = [...surplusArgs, ...args]
    if (combineArgs.length >= func.length) {
      return func.apply(null, combineArgs)
    } else {
      return curry(func, ...combineArgs)
    }
  }
}

export default curry
