import curry from '../src/index'

/**
 * Dummy test
 */
describe('curry test', () => {
  const add = (x: number = 0, y: number = 0, z: number = 0) => {
    return x + y + z
  }

  it('return function', () => {
    const fn = () => {
      console.log(1)
    }
    const result = curry(fn)
    expect(typeof result === 'function').toBeTruthy()
  })

  it('add(1)(2)(3)', () => {
    const addCurry = curry(add)
    expect(addCurry(1, 2, 3)).toBe(6)
  })

  it('Support multiple parameters', () => {
    const addCurry = curry(add, 1, 2)
    expect(addCurry(3)).toBe(6)
  })

  it('The granular function does not accept parameters and is executed immediately', () => {
    const mockFunc = jest.fn()
    curry(mockFunc)()

    expect(mockFunc).toHaveBeenCalled()
  })
})
