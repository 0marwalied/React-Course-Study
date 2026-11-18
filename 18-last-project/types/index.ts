interface Todo {
  id: string;
  title: string;
  body?: string;
  completed?: boolean;
  createdAt?: Date;
}

interface User {
  id: string;
  name?: string;
  email?: string;
  userName?: string;
  address?: {
    street: string;
    city: string;
    country: string;
  };
}

export type { Todo, User };
