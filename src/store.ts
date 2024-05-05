import { create } from "zustand";

interface ExpenseStore {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const useExpenseStore = create<ExpenseStore>((set) => ({
  selectedCategory: null,
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));

export default useExpenseStore;
