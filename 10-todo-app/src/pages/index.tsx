import { useEffect, useState } from "react";
import TodoRow from "../components/Todo";
import axiosInstance from "../config/axios.config";
import { getLoggedInUser } from "../utils/auth";

const HomePage = () => {
  const logedInUser = getLoggedInUser();
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    try {
      axiosInstance
        .get("users/me?populate=todos", {
          headers: {
            Authorization: `Bearer ${logedInUser.jwt}`,
          },
        })
        .then((response) => {
          setTodos(response.data.todos);
          console.log(response.data.todos);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, [logedInUser.jwt]);

  return (
    <div className="flex flex-col space-y-4 items-center justify-center p-4">
      {/* <TodoRow id={1} title="First Todo" />
      <TodoRow id={2} title="Second Todo" colored />
      <TodoRow id={3} title="Third Todo" /> */}
      {todos.length ? (
        todos.map((todo: { id: number; Title: string }, idx) => (
          <TodoRow
            key={todo.id}
            id={idx + 1}
            title={todo.Title}
            colored={idx % 2 == 1}
          />
        ))
      ) : (
        <p className="font-semibold">No todos found</p>
      )}
    </div>
  );
};

export default HomePage;
