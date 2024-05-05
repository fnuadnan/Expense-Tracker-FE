export type Categories = "Entertainment" | "Utilities" | "Groceries";

export interface Expense {
  _id?: number;
  description: string;
  amount: number;
  category: Categories;
}

export interface ExpenseFormData {
  description: string;
  amount: number;
  category: Categories;
}
