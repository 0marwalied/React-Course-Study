import Button from "./ui/Button";

interface TodoProps {
  id: number;
  title: string;
  colored?: boolean;
}

const TodoRow = ({ id, title, colored }: TodoProps) => {
  return (
    <div
      className={`flex items-center w-2xl justify-between ${colored ? "bg-gray-200" : "bg-white"} p-2 rounded-lg`}
    >
      <p className="font-bold">
        {id}- {title}
      </p>
      <div className="flex space-x-2">
        <Button status="send">Edit</Button>
        <Button status="danger">Delete</Button>
      </div>
    </div>
  );
};

export default TodoRow;
