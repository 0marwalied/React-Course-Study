let notes = [
  `<code>yarn dev</code> - to run the development server`,
  `<code>yarn build</code> - to create a production build`,
  `<code>yarn start</code> - to run the production build`,
  `<file>Public folder</file> contents are served as-is without processing`,
  `<file>main.tsx file</file> is called entry file`,
  `<code>Root component</code> is the top-most component in the app <code>(App component)</code>`,
  `<code>React component</code> take only one parameter called <code>props</code>`,
  `<code>React component</code> it's just a function that returns <code>JSX</code>`,
  `<code>React components</code> must start with a capital letter like <code>App</code> or <code>Header</code>`,
  `<code>Export default</code> is used to export only one value from a file`,
  `<code>Export</code> only is used to export multiple values from a file`,
  `<code>Fragment</code> is used to group multiple elements without adding extra nodes to the DOM`,
  `<code>JSX Rules:</code> <br><br>
  1. You can only return one top-level element <br>
  2. Any element must include closing tag side <br>
  3. Component Name Must Capitalized <br>
  4. If you want to make an Expression in <code>JSX</code> you must wrapped it arround <code>{}</code> <br>
  5. When you gives a class to component user className insted`,
];

let list = document.querySelector(`ul`);

for (let note of notes) {
  let li = document.createElement(`li`);
  li.innerHTML = note;
  list.appendChild(li);
  list.appendChild(document.createElement(`hr`));
}
