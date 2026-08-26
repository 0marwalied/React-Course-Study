export interface Product {
  id: string;
  documentId: string;
  title: string;
  price: number;
  thumbnail?: {
    url: string;
  };
  description: string;
  category: {
    title: string;
  };
}
