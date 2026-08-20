export interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail?: {
    url: string;
  };
  description: string;
}
