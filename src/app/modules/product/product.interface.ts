export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
};