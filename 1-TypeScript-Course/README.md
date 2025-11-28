# TypeScript Notes

`tsc --init` to create a <file>tsconfig.json</file> file for configuring TypeScript project settings.

`ts-node` `fileName.ts` for running TypeScript files directly without compiling`

`tsc fileName.ts` for compiling TypeScript files to JavaScript

`readonly` modifier to make properties immutable after initialization.

`Record<string, number>` creates an object with string keys and number values.

`keyof` can be used to get the keys of a type as a union.

`Generic` types allow you to create reusable components that work with a variety of data types, Same as template in `c++`.<br>
Example:

```TS
function swap<T>(a: T, b: T): [T, T] {
  return [b, a];
}
```

Partial types with the `Partial<Any type>` utility type to make all properties of a type optional.

`index signature` to define types for objects with dynamic keys.
<br>
Example:

```TS
interface StringNumberMap { [key: string]: number; }
```
