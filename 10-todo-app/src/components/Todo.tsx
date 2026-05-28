import { useState } from "react";
import Button from "./ui/Button";
import Modal from "./ui/Modal";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import type { ITodo } from "../interfaces";
import { useForm, type SubmitHandler } from "react-hook-form";
import Form from "./ui/Form";
import axiosInstance from "../config/axios.config";
import { getLoggedInUserData } from "../utils/auth";

interface IFormInputs {
  title: string;
  description?: string | undefined;
}

const TodoRow = ({ id, documentId, title, description }: ITodo) => {
  const userData = getLoggedInUserData();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInputs>({
    defaultValues: {
      title,
      description,
    },
  });

  const onSubmit: SubmitHandler<IFormInputs> = async (Data) => {
    const { title, description } = Data;
    try {
      await axiosInstance.put(
        `/todos/${documentId}`,
        {
          data: {
            title,
            description,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${userData!.jwt}`,
          },
        },
      );
      location.reload();
    } catch (error) {
      console.log("Error updating todo:", error);
    } finally {
      setIsEditModalOpen(false);
    }
  };

  return (
    <div
      className={`flex items-center w-2xl justify-between hover:bg-gray-200 p-2 rounded-lg`}
    >
      <p className="font-bold">
        {id}- {title}
      </p>
      <div className="flex space-x-2">
        <Button
          status="send"
          className="font-semibold"
          onClick={() => {
            reset({
              title,
              description,
            });
            setIsEditModalOpen(true);
          }}
        >
          Edit
        </Button>
        <Button status="danger" className="font-semibold">
          Remove
        </Button>
      </div>

      <Modal
        isOpen={isEditModalOpen}
        closeModal={() => setIsEditModalOpen(false)}
        title="Edit Todo"
      >
        <Form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            {...register("title", {
              required: {
                value: true,
                message: "Title is required",
              },
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters",
              },
              maxLength: {
                value: 20,
                message: "Title cannot exceed 20 characters",
              },
            })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
          <Textarea {...register("description")} />
          <div className="flex space-x-2">
            <Button
              status="send"
              type="submit"
              className="font-semibold w-full"
            >
              Save Changes
            </Button>
            <Button
              status="normal"
              className="font-semibold w-full "
              type="button"
              onClick={() => {
                reset({
                  title,
                  description,
                });
                setIsEditModalOpen(false);
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
