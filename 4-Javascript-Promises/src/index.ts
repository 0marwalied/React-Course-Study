type todoTask = {
  id: number;
  task: string;
  userId: number;
  completed: boolean;
};

type user = {
  userId: number;
} | null;

function getUserTodos(user: user): Promise<todoTask[]> {
  let todos: todoTask[] = [];
  console.log("Fetching todos...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todos = [
        { id: 1, task: "Learn TypeScript", userId: 1, completed: false },
        { id: 2, task: "Build a project", userId: 1, completed: true },
        { id: 3, task: "Read a book", userId: 2, completed: false },
      ];
      let userTodos: todoTask[] = todos.filter(
        (todo) => user?.userId && todo.userId === user.userId
      );
      if (userTodos.length !== 0) resolve(userTodos);
      reject("There is no tasks for this user");
    }, 1500);
  });
}

function getConstantUser(): Promise<user> {
  console.log("Fetching user...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const constantUser: user = { userId: 3 };
      if (constantUser) resolve(constantUser);
      reject("There is no user currently");
    }, 1000);
  });
}

// getConstantUser()
//   .then((user) => {
//     console.log("Fetched User");
//     console.log("User: ", user, "\n");
//     return getUserTodos(user);
//   })
//   .then((todos) => {
//     console.log("User Todos:", todos);
//     console.log("Todos fetched\n");
//   })
//   .catch((error) => console.log(error));
async function getUserData() {
  try {
    const user = await getConstantUser();
    console.log(user);

    const Todos = await getUserTodos(user);
    console.log({ Todos });
    
  } catch (error) {
    console.log(error);
  }
}

getUserData();
