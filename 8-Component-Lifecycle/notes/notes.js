let notes = [
  "<code>Constructor</code> is called first, before the component is mounted.",
  "<code>Render</code> method is called next, and it returns the JSX to be rendered to the DOM.",
  "<code>componentDidMount</code> is called after the component is mounted to the DOM. It is a good place to make API calls or set up subscriptions.",
  "<code>componentDidUpdate</code> is called after the component updates. It receives previous props and state as arguments, allowing you to compare them with current props and state.",
  "<code>componentWillUnmount</code> is called just before the component is unmounted and destroyed. It is a good place to clean up subscriptions or timers to prevent memory leaks.",
  "useEffect hook can be used in functional components to mimic the behavior of lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.",
  "<code>useEffect</code> cleanup function is called before the component is unmounted or before the effect runs again, making it useful for cleaning up subscriptions or timers.",
  "<code>AbortController</code> can be used to cancel fetch requests in componentWillUnmount or the cleanup function of useEffect to prevent memory leaks.",
];

let list = document.querySelector(`ul`);

for (let note of notes) {
  let li = document.createElement(`li`);
  li.innerHTML = note;
  list.appendChild(li);
  list.appendChild(document.createElement(`hr`));
}
