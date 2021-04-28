# curry

## Install

npm
```text
npm install @qiqingfu/curry
```

yarn
```text
yarn add @qiqingfu/curry
```

## Usage

### Basic example
```javascript
import curry from "@qiqingfu/curry"

const add = (x, y, z) => {
  return x + y + z
}

const addCurry = curry(add)
const result = addCurry(1)(2)(3)  // 6
```

### Special example
Specify default parameters when creating a granular function.

```javascript
import curry from "@qiqingfu/curry"

const add = (x, y, z) => {
  return x + y + z
}

const addCurry = curry(add, 1, 2)
const result = addCurry(3)  // 6
```



A function will be executed immediately without parameters
```javascript
import curry from "@qiqingfu/curry"

const add = () => {
  return 'hi'
}

const addCurry = curry(add)
const result = addCurry()  // 'hi'
```

## End
This tool library is still being improved using TypeScript, and a complete type system and code quality optimization will be added in the future.


