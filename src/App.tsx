import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { Expense } from "./types/ExpenseTypes";

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { _id: 1, description: "Photo", amount: 30, category: "Utilities" },
    { _id: 2, description: "hey", amount: 40, category: "Utilities" },
    { _id: 6, description: "bfa", amount: 60, category: "Entertainment" },
  ]);
  return (
    <div>
      <ExpenseForm
        addExpense={(expense: Expense) => setExpenses([...expenses, expense])}
      />
      <ExpenseList
        expenses={expenses}
        onDelete={(expenseId) =>
          setExpenses(expenses.filter((e) => e._id !== expenseId))
        }
      />
    </div>
  );
};

export default App;
