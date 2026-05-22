import Button from "./ui/Button";

interface TodoProps {
  id: number;
  title: string;
}

const TodoRow = ({ id, title }: TodoProps) => {
  return (
    <div
      className={`flex items-center w-2xl justify-between hover:bg-gray-200 p-2 rounded-lg`}
    >
      <p className="font-bold">
        {id}- {title}
      </p>
      <div className="flex space-x-2">
        <Button status="send" className="font-semibold">
          Edit
        </Button>
        <Button status="danger" className="font-semibold">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TodoRow;
