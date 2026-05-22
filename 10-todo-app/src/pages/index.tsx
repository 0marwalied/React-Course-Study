import TodoRow from "../components/Todo";
import axiosInstance from "../config/axios.config";
import { getLoggedInUser } from "../utils/auth";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const userData = getLoggedInUser();
  const { isLoading, error, data } = useQuery({
    queryKey: ["todos"],
    queryFn: async () =>
      await axiosInstance
        .get("users/me?populate=todos", {
          headers: {
            Authorization: `Bearer ${userData.jwt}`,
          },
        })
        .then((response) => response.data),
  });

  if (isLoading) return <p className="font-semibold text-xl">Loading...</p>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex flex-col space-y-4 items-center justify-center p-4">
      {data?.todos && data.todos.length ? (
        data.todos.map((todo: { id: number; Title: string }, idx: number) => (
          <TodoRow key={todo.id} id={idx + 1} title={todo.Title} />
        ))
      ) : (
        <p className="font-semibold">No todos found</p>
      )}
    </div>
  );
};

export default HomePage;
