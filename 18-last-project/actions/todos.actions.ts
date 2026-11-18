"use server";

import { Todo } from "@/types";
import { db as prisma } from "@/lib/db";

async function getTodos() {
  return await prisma.todo.findMany();
}

async function createTodo({ ...params }: Todo) {
  return await prisma.todo.create({
    data: {
      ...params,
    },
  });
}

async function updateTodo({ id, ...params }: Todo) {
  return await prisma.todo.update({
    where: {
      id,
    },
    data: {
      ...params,
    },
  });
}

async function deleteTodo({ id }: Todo) {
  return await prisma.todo.delete({
    where: {
      id,
    },
  });
}

export { getTodos, createTodo, updateTodo, deleteTodo };
