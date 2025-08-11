import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Product {
  id: number;
  name: string;
  description: string;
  mrp: string;
  sellingPrice: string;
  slug: string;
  images: string;
  categories: string;
  quantity: number;
}

interface CartStore {
  items: Product[];
  addItem: (data: Product, quantity?: number, total?: number) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (data: Product, quantity: number = 1, total?: number) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(
          (item) => item.id === data.id
        );

        if (existingItemIndex !== -1) {
          set({
            items: currentItems.map((item, index) =>
              index === existingItemIndex ? { ...item, quantity, total } : item
            ),
          });
        } else {
          set((state) => ({
            items: [...state.items, { ...data, quantity, total }],
          }));
        }
      },
      removeItem: (id: number) => {
        const itemToRemove = get().items.find((item) => item.id === id);
        if (itemToRemove) {
          set({
            items: get().items.filter((item) => item.id !== id),
          });
        }
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
