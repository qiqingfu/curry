type Curry<T = any, R = any> = (
  fn: (...args: T[]) => R,
  ...args: T[]
) => (...value: T[]) => R | Curry<T, R>

const curry: Curry = (fn, ...args) => {
  return (...value) => {
    const c = [...args, ...value]
    return c.length >= fn.length ? fn(...c) : curry(fn, ...c)
  }
}

export default curry
