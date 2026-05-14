import TodoRow from "../components/Todo";

const HomePage = () => {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center p-4">
      <TodoRow id={1} title="First Todo" />
      <TodoRow id={2} title="Second Todo" colored />
      <TodoRow id={3} title="Third Todo"  />
    </div>
  );
};

export default HomePage;
