let notes = [
  `<code>ts --init</code> to create a <file>tsconfig.json</file> file for configuring TypeScript project settings.`,
  `<code>ts-node</code> <file>fileName.ts</file> for running TypeScript files directly without compiling`,
  `<code>tsc fileName.ts</code> for compiling TypeScript files to JavaScript`,
  `<code>readonly</code> modifier to make properties immutable after initialization.`,
  `<code>Record&lt;string, number&gt;</code> creates an object with string keys and number values.`,
  `<code>keyof</code> can be used to get the keys of a type as a union.`,
  `<code>Generic</code> types allow you to create reusable components that work with a variety of data types, Same as template in <code>c++</code>.
  <br><br>
  Example:
  <code>
  function swap&lt;T&gt;(a: T, b: T): [T, T] {
    return [b, a];
  }
  </code>
  `,
  `Partial types with the <code>Partial&lt;Any type&gt;</code> utility type to make all properties of a type optional.`,
  `<code>index signature</code> to define types for objects with dynamic keys.
  <br><br>
  Example:
  <code>
  interface StringNumberMap {
    [key: string]: number;
  }
  </code>
  `,
];
let list = document.querySelector(`ul`);

for (let note of notes) {
  let li = document.createElement(`li`);
  li.innerHTML = note;
  list.appendChild(li);
  list.appendChild(document.createElement(`hr`));
}
