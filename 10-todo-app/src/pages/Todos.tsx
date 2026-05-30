import { useState } from "react";
import Paginator from "../components/ui/Paginator";
import useAuthenticatedQuery from "../hooks/useAuthenticatedQuery";
import type { ITodo } from "../interfaces";
import { getLoggedInUserData } from "../utils/auth";
import Button from "../components/ui/Button";
import { faker } from "@faker-js/faker";
import { successNotify } from "../components/notification";
import axiosInstance from "../config/axios.config";
import Select from "../components/ui/Select";

const TodosPage = () => {
  const userData = getLoggedInUserData();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<10 | 50 | 100>(10);
  const [sortBy, setSortBy] = useState<"ASC" | "DESC">("ASC");
  const [generatingTodos, setGeneratingTodos] = useState(false);
  const { isLoading, data, isFetching } = useAuthenticatedQuery({
    url: `todos?pagination[pageSize]=${pageSize}&pagination[page]=${page}&sort[createdAt]=${sortBy}`,
    queryKey: ["todosList", `${page}${pageSize}${generatingTodos}${sortBy}`],
    config: {
      headers: {
        Authorization: `Bearer ${userData!.jwt}`,
      },
    },
  });

  const generateTodos = async () => {
    try {
      for (let i = 0; i < 10; i++) {
        const todo = {
          title: faker.word.words(5),
          description: faker.lorem.paragraphs(2),
        };
        await axiosInstance.post(
          "/todos",
          { data: todo },
          {
            headers: {
              Authorization: `Bearer ${userData!.jwt}`,
            },
          },
        );
      }
      successNotify("Todos generated successfully");
      setGeneratingTodos((prev) => !prev);
    } catch (error) {
      console.log("Error generating todos:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Button status="send" className="w-fit" onClick={() => generateTodos()}>
          Generate todos
        </Button>
        <div className="flex space-x-2">
          <Select onChange={(e) => setSortBy(e.target.value as "ASC" | "DESC")}>
            <option disabled>Sort by</option>
            <option value="ASC">Oldest</option>
            <option value="DESC">Newest</option>
          </Select>
          <Select
            onChange={(e) => {
              setPageSize(+e.target.value as 10 | 50 | 100);
              setPage(1);
            }}
          >
            <option disabled>Page size</option>
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </Select>
        </div>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data?.data.map((todo: ITodo) => (
            <div
              className={`flex items-center w-2xl justify-between hover:bg-gray-200 p-2 rounded-lg`}
              key={todo.id}
            >
              <p className="font-bold">
                {todo.id}-{" "}
                {todo.title.charAt(0).toUpperCase() + todo.title.slice(1)}
              </p>
            </div>
          ))}
          <Paginator
            isLoading={isLoading || isFetching}
            page={data?.meta.pagination.page}
            pageCount={data?.meta.pagination.pageCount}
            total={data?.meta.pagination.total}
            onClickPrev={() => {
              setPage((prev) => prev - 1);
            }}
            onClickNext={() => {
              setPage((prev) => prev + 1);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TodosPage;
