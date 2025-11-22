let notes = [
  `<correct>Resolve</correct> and <wrong>Reject</wrong> are functions that are used to settle a Promise. Resolve is called when the operation is successful, while Reject is called when there is an error or failure.`,
  `<between>Pending</between> is the initial state of a Promise, indicating that the operation is still in progress. A Promise remains in the pending state until it is either resolved or rejected.`,
  `A Promise is settled when it is either resolved or rejected. Once a Promise is settled, its state cannot change.`,
  `The then() method is used to specify what should happen when a Promise is resolved successfully. It takes two optional arguments: a callback function for the resolved case and another for the rejected case.`,
  `The catch() method is used to handle errors or rejections in a Promise chain. It is called when a Promise is rejected and allows you to define how to respond to the error.`,
  `The finally() method is used to execute code after a Promise has been settled, regardless of whether it was resolved or rejected. It is often used for cleanup actions.`,
];
let list = document.querySelector(`ul`);

for (let note of notes) {
  let li = document.createElement(`li`);
  li.innerHTML = note;
  list.appendChild(li);
  list.appendChild(document.createElement(`hr`));
}
