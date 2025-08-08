export type Category = {
  id: number;
  name: string;
  color: string;
  icon: string;
};

export type Slider = {
  id: number;
  url: string;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  mrp: string;
  sellingPrice: string;
  itemQuantityType: string;
  slug: string;
  images: string;
  categories: string;
};
