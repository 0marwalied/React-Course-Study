let notes = [
  `Synchronous programming is blocking.`,
  `Asynchronous programming is non-blocking.`,
  `In synchronous programming, tasks are performed one at a time.`,
  `In asynchronous programming, tasks can be performed concurrently.`,
  `<code>Callbacks</code>, <code>Promises</code>, and <code>async/await</code> are common patterns in asynchronous programming.`,
  `<code>Callback hell</code> is a problem where callbacks are nested within callbacks, making code hard to read and maintain.`,
];
let list = document.querySelector(`ul`);

for (let note of notes) {
  let li = document.createElement(`li`);
  li.innerHTML = note;
  list.appendChild(li);
  list.appendChild(document.createElement(`hr`));
}
