import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";

export interface Expense {
  _id?: number;
  description: string;
  amount: number;
  category: "Entertainment" | "Utilities" | "Groceries";
}

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { _id: 1, description: "Photo", amount: 30, category: "Utilities" },
    { _id: 2, description: "hey", amount: 40, category: "Utilities" },
    { _id: 3, description: "bfa", amount: 60, category: "Entertainment" },
  ]);
  console.log(expenses)
  return (
    <div>
      <ExpenseForm
        addExpense={(expense) => setExpenses([...expenses, expense])}
      />
    </div>
  );
};

export default App;
