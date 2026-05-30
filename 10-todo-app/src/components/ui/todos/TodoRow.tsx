import { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import Input from "../Input";
import Textarea from "../Textarea";
import type { ITodo } from "../../../interfaces";
import { useForm, type SubmitHandler } from "react-hook-form";
import Form from "../Form";
import axiosInstance from "../../../config/axios.config";
import { getLoggedInUserData } from "../../../utils/auth";
import { successNotify } from "../../notification";

interface IFormInputs {
  title: string;
  description?: string | undefined;
}

const TodoRow = ({
  id,
  documentId,
  title,
  description,
  setQueryVersion,
}: ITodo & {
  setQueryVersion: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const userData = getLoggedInUserData();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

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
    setIsUpdating(true);
    try {
      const { status } = await axiosInstance.put(
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
      if (status >= 200) {
        setQueryVersion((prev) => prev + 1);
      }
    } catch (error) {
      console.log("Error updating todo:", error);
    } finally {
      setIsUpdating(false);
      setIsEditModalOpen(false);
    }
  };

  const onRemove = async () => {
    try {
      const { status } = await axiosInstance.delete(`/todos/${documentId}`, {
        headers: {
          Authorization: `Bearer ${userData!.jwt}`,
        },
      });
      if (status >= 200) {
        successNotify("Todo deleted successfully");
        setQueryVersion((prev) => prev + 1);
      }
    } catch (error) {
      console.log("Error deleting todo:", error);
    } finally {
      setIsDeleteModalOpen(false);
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
        <Button status="danger" onClick={() => setIsDeleteModalOpen(true)}>
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
              isLoading={isUpdating}
            >
              Save Changes
            </Button>
            <Button
              status="normal"
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

      <Modal
        isOpen={isDeleteModalOpen}
        closeModal={() => setIsDeleteModalOpen(false)}
        title="Are you sure you want to remove this todo from your store?"
        description="Deleting this todo will remove it permanently from your inventory. Any associated data, sales history, and other related information will also be deleted. Please make sure this is the intended action."
      >
        <div className="flex space-x-2 mt-4">
          <Button status="danger" className="font-semibold" onClick={onRemove}>
            Yes, remove
          </Button>
          <Button
            status="normal"
            className="font-semibold"
            onClick={() => setIsDeleteModalOpen(false)}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TodoRow;
