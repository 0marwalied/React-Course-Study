import { useState, type ChangeEvent } from "react";
import TodoRow from "../components/ui/todos/TodoRow";
import useAuthenticatedQuery from "../hooks/useAuthenticatedQuery";
import { getLoggedInUserData } from "../utils/auth";
import type { ITodo } from "../interfaces";
import TodoSkeleton from "../components/ui/todos/TodoSkeleton";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import Textarea from "../components/ui/Textarea";
import Input from "../components/ui/Input";
import axiosInstance from "../config/axios.config";
import { successNotify } from "../components/notification";
import { faker } from "@faker-js/faker";

const HomePage = () => {
  const userData = getLoggedInUserData();
  const [isAddTodoModalOpen, setIsAddTodoModalOpen] = useState(false);
  const [addTodoLoading, setAddTodoLoading] = useState(false);
  const [generateTodosLoading, setGenerateTodosLoading] = useState(false);
  const [queryVersion, setQueryVersion] = useState(0);
  const [isOpenModalGenerateTodos, setIsOpenModalGenerateTodos] =
    useState(false);
  const [addTodo, setAddTodo] = useState<ITodo>({
    id: 0,
    documentId: "",
    title: "",
    description: "",
  });

  const { isLoading, data } = useAuthenticatedQuery({
    url: "users/me?populate=todos",
    queryKey: ["todos", `${queryVersion}`],
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

  const handleAddTodo = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAddTodoLoading(true);
    try {
      const { title, description } = addTodo;
      const { status } = await axiosInstance.post(
        "/todos",
        {
          data: {
            title,
            description,
            user: {
              connect: [{ documentId: userData!.user.documentId }],
            },
          },
        },
        {
          headers: {
            Authorization: `Bearer ${userData!.jwt}`,
          },
        },
      );
      if (status >= 200) {
        successNotify("Todo added successfully");
        setQueryVersion((prev) => prev + 1);
      }
    } catch (error) {
      console.log("Error adding todo:", error);
    } finally {
      setAddTodoLoading(false);
      setIsAddTodoModalOpen(false);
    }
  };

  const onChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setAddTodo({
      ...addTodo,
      [name]: value,
    });
  };

  const generateTodos = async () => {
    setGenerateTodosLoading(true);
    try {
      for (let i = 0; i < 10; i++) {
        const todo = {
          title: faker.word.words(5),
          description: faker.lorem.paragraphs(2),
          user: {
            connect: [{ documentId: userData!.user.documentId }],
          },
        };
        await axiosInstance.post(
          "/todos",
          {
            data: todo,
          },
          {
            headers: {
              Authorization: `Bearer ${userData!.jwt}`,
            },
          },
        );
        setQueryVersion((prev) => prev + 1);
      }
    } catch (error) {
      console.log("Error generating todos:", error);
    } finally {
      setGenerateTodosLoading(false);
      setIsOpenModalGenerateTodos(false);
    }
  };

  return (
    <div className="flex flex-col space-y-4 items-center justify-center p-4">
      <div className="flex space-x-2">
        <Button status="send" onClick={() => setIsAddTodoModalOpen(true)}>
          Add Todo
        </Button>
        <Button
          status="none"
          className="text-black"
          onClick={() => setIsOpenModalGenerateTodos(true)}
          isLoading={generateTodosLoading}
        >
          Generate todos
        </Button>
      </div>

      {data.todos && data.todos.length ? (
        data.todos.map((todo: ITodo, idx: number) => (
          <TodoRow
            key={todo.id}
            id={idx + 1}
            documentId={todo.documentId}
            title={todo.title}
            description={todo.description}
            setQueryVersion={setQueryVersion}
          />
        ))
      ) : (
        <p className="font-semibold">No todos found</p>
      )}

      <Modal
        isOpen={isAddTodoModalOpen}
        closeModal={() => setIsAddTodoModalOpen(false)}
        title="Add Todo"
      >
        <div className="flex flex-col space-y-4">
          <Input name="title" placeholder="Title" onChange={onChangeHandler} />
          <Textarea
            name="description"
            placeholder="Description"
            onChange={onChangeHandler}
          />
          <div className="flex space-x-2">
            <Button
              status="send"
              isLoading={addTodoLoading}
              type="submit"
              onClick={handleAddTodo}
            >
              Add Todo
            </Button>
            <Button
              status="normal"
              onClick={() => setIsAddTodoModalOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpenModalGenerateTodos}
        closeModal={() => setIsOpenModalGenerateTodos(false)}
        title="Generate Todos"
      >
        <div className="flex flex-col space-y-4">
          <p>
            Are you sure you want to generate todos? you will add 10 todos to
            your account.
          </p>
          <div className="flex space-x-2">
            <Button status="send" onClick={generateTodos}>
              Generate todos
            </Button>
            <Button
              status="normal"
              onClick={() => setIsOpenModalGenerateTodos(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HomePage;
