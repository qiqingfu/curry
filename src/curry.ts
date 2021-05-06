/**
 * 使用泛型别名为 curry 函数定义函数类型字面量
 */
type Curry<T = unknown, R = unknown> = (
  fn: (...args: T[]) => R,
  ...args: T[]
) => (...value: T[]) => R | Curry<T, R>

/**
 * 具体实现
 * @param fn
 * @param args
 */
const curry: Curry = (fn, ...args) => {
  return (...value) => {
    const combineArgs = [...args, ...value]
    return combineArgs.length >= fn.length ? fn.apply(null, combineArgs) : curry(fn, ...combineArgs)
  }
}

export default curry
