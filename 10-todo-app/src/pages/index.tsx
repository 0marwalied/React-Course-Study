import { useState } from "react";
import TodoRow from "../components/ui/todos/Todo";
import useAuthenticatedQuery from "../hooks/useAuthenticatedQuery";
import { getLoggedInUserData } from "../utils/auth";
import type { ITodo } from "../interfaces";
import TodoSkeleton from "../components/ui/todos/TodoSkeleton";

const HomePage = () => {
  const userData = getLoggedInUserData();
  const [todoToEdit, setTodoToEdit] = useState<ITodo>({
    id: 0,
    documentId: "",
    title: "",
    description: "",
  });

  const { isLoading, data } = useAuthenticatedQuery({
    url: "users/me?populate=todos",
    queryKey: [
      "todos",
      `${todoToEdit},${todoToEdit.documentId},${todoToEdit.title},${todoToEdit.description}`,
    ],
    config: {
      headers: {
        Authorization: `Bearer ${userData!.jwt}`,
      },
    },
  });

  if (isLoading) {
    return Array.from({ length: 3 }).map((_, idx) => (
      <TodoSkeleton key={idx} />
    ));
  }

  return (
    <div className="flex flex-col space-y-4 items-center justify-center p-4">
      {data?.todos && data.todos.length ? (
        data.todos.map((todo: ITodo, idx: number) => (
          <TodoRow
            key={todo.id}
            id={idx + 1}
            documentId={todo.documentId}
            title={todo.title}
            description={todo.description}
            editTodo={(todo) => setTodoToEdit(todo)}
          />
        ))
      ) : (
        <p className="font-semibold">No todos found</p>
      )}
    </div>
  );
};

export default HomePage;
