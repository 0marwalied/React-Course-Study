export interface Category {
  documentId: string;
  title: string;
}

export interface Product {
  id: string;
  documentId: string;
  title: string;
  price: number;
  thumbnail?: {
    url: string;
  };
  description?: string;
  category?: Category;
  stock: number;
  quantity: number;
}

export interface User {
  identifier: string;
  password: string;
}
