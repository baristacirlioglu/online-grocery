import { Category } from "@/types";
import { create } from "zustand";
import axios from "axios";

export type CategoryState = {
  categories: Category[];
  fetchCategories: () => Promise<void>;
};

const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/categories?sort[0]=name:asc&populate=*`;
export const useCategoriesStore = create<CategoryState>((set) => ({
  categories: [],
  fetchCategories: async () => {
    try {
      const response = await axios.get(Urls);
      set({
        categories: response.data.data.map(
          (category: {
            id: number;
            name: string;
            color: string;
            icon: { url: string };
          }) => ({
            id: category.id,
            name: category.name,
            color: category.color,
            icon: category.icon.url,
          })
        ),
      });
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  },
}));
