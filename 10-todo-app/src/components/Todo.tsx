import { useState } from "react";
import Button from "./ui/Button";
import Modal from "./ui/Modal";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import type { ITodo } from "../interfaces";
import Form from "./ui/Form";

const TodoRow = ({ id, title, description }: ITodo) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [todo, setTodo] = useState<ITodo>({ id, title, description });

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setTodo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
      className={`flex items-center w-2xl justify-between hover:bg-gray-200 p-2 rounded-lg`}
    >
      <p className="font-bold">
        {todo.id}- {todo.title}
      </p>
      <div className="flex space-x-2">
        <Button
          status="send"
          className="font-semibold"
          onClick={() => setIsEditModalOpen(true)}
        >
          Edit
        </Button>
        <Button status="danger" className="font-semibold">
          Delete
        </Button>
      </div>

      <Modal
        isOpen={isEditModalOpen}
        closeModal={() => setIsEditModalOpen(false)}
        title="Edit Todo"
      >
        <Form className="flex flex-col space-y-4">
          <Input value={todo.title} onChange={onChangeHandler} name="title" />
          <Textarea
            value={todo.description}
            onChange={onChangeHandler}
            name="description"
          />
          <div className="flex space-x-2">
            <Button status="send" className="font-semibold w-full">
              Save Changes
            </Button>
            <Button
              status="normal"
              className="font-semibold w-full "
              onClick={() => {
                setIsEditModalOpen(false);
                setTodo({ id, title, description });
              }}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default TodoRow;
