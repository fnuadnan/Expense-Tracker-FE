import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import { Expense } from "./types/ExpenseTypes";

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { _id: 1, description: "Photo", amount: 30, category: "Utilities" },
    { _id: 2, description: "hey", amount: 40, category: "Utilities" },
    { _id: 3, description: "bfa", amount: 60, category: "Entertainment" },
  ]);
  console.log(expenses);
  return (
    <div>
      <ExpenseForm
        addExpense={(expense: Expense) => setExpenses([...expenses, expense])}
      />
    </div>
  );
};

export default App;
