export interface Product {
  id: string;
  documentId: string;
  title: string;
  price: number;
  thumbnail?: {
    url: string;
  };
  description?: string;
  category?: {
    title: string;
  };
  quantity: number;
}

export interface User {
  identifier: string;
  password: string;
}
