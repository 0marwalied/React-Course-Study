interface Todo {
  id: number;
  todo: string;
}

function getTodoList(callback: (todoList: Todo[]) => void) {
  let todoList: Todo[] = [];
  console.log("Fetching todo list...");
  setTimeout(() => {
    todoList = [
      {
        id: 1,
        todo: "Learn TypeScript",
      },
    ];
    callback(todoList);
  }, 2000);
}

getTodoList((todoList: Todo[]) => {
  console.log(todoList);
  console.log("Fetching todo list has been completed.");
});
