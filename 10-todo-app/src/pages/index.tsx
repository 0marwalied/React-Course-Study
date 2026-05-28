import TodoRow from "../components/Todo";
import useAuthenticatedQuery from "../hooks/useAuthenticatedQuery";
import { getLoggedInUserData } from "../utils/auth";

const HomePage = () => {
  const userData = getLoggedInUserData();
  const { isLoading, data } = useAuthenticatedQuery({
    url: "users/me?populate=todos",
    queryKey: ["todos"],
    config: {
      headers: {
        Authorization: `Bearer ${userData!.jwt}`,
      },
    },
  });

  if (isLoading) return <p className="font-semibold text-xl">Loading...</p>;

  return (
    <div className="flex flex-col space-y-4 items-center justify-center p-4">
      {data?.todos && data.todos.length ? (
        data.todos.map(
          (
            todo: {
              id: number;
              documentId: string;
              title: string;
              description?: string;
            },
            idx: number,
          ) => (
            <TodoRow
              key={todo.id}
              id={idx + 1}
              documentId={todo.documentId}
              title={todo.title}
              description={todo.description}
            />
          ),
        )
      ) : (
        <p className="font-semibold">No todos found</p>
      )}
    </div>
  );
};

export default HomePage;
