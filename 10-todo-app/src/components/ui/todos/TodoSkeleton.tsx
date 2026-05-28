const TodoSkeleton = () => {
  return (
    <div className="flex items-center justify-between w-2xl">
      <div>
        <div className="h-3.5 bg-gray-300 rounded-md dark:bg-gray-600 w-24 mb-2.5"></div>
      </div>
      <div className="flex space-x-2">
        <div className="h-4.5 bg-gray-300 rounded-md dark:bg-gray-700 w-12"></div>
        <div className="h-4.5 bg-gray-300 rounded-md dark:bg-gray-700 w-12"></div>
      </div>
    </div>
  );
};

export default TodoSkeleton;
