let notes = [
  "Constructor is called first, before the component is mounted.",
  "Render method is called next, and it returns the JSX to be rendered to the DOM.",
  "componentDidMount is called after the component is mounted to the DOM. It is a good place to make API calls or set up subscriptions.",
  "componentDidUpdate is called after the component updates. It receives previous props and state as arguments, allowing you to compare them with current props and state.",
  "componentWillUnmount is called just before the component is unmounted and destroyed. It is a good place to clean up subscriptions or timers to prevent memory leaks.",
];

let list = document.querySelector(`ul`);

for (let note of notes) {
  let li = document.createElement(`li`);
  li.innerHTML = note;
  list.appendChild(li);
  list.appendChild(document.createElement(`hr`));
}
