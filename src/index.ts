type Func<T, R> = (...values: T[]) => R

type Curry<T = any, R = any> = {
  (func: Func<T, R>, ...args: T[]): Func<T, R | Curry<T, R>>
}

const curry: Curry = (func, ...args) => {
  return (...values) => {
    const c = [...args, ...values]
    return c.length >= func.length ? func(...c) : curry(func, ...c)
  }
}

export default curry
