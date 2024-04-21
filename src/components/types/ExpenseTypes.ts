
export interface Expense {
  _id?: number;
  description: string;
  amount: number;
  category: "Entertainment" | "Utilities" | "Groceries";
}

export type ExpenseFormData = {
  description: string;
  amount: number;
  category: "Entertainment" | "Utilities" | "Groceries";
};
