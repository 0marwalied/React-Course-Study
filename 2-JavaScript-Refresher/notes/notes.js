let notes = [
  `There is two types of writing functions in objects: method syntax and function syntax. <br> <br> 
  In method syntax, we don't use the <code>function</code> keyword. <br> <br>
  In function syntax, we use the <code>function</code> keyword.`,
];
let list = document.querySelector(`ul`);

for (let note of notes) {
  let li = document.createElement(`li`);
  li.innerHTML = note;
  list.appendChild(li);
  list.appendChild(document.createElement(`hr`));
}
