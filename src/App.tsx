import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { Categories, Expense } from "./entities/ExpenseTypes";

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { _id: 1, description: "Photo", amount: 30, category: "Utilities" },
    { _id: 2, description: "hey", amount: 40, category: "Utilities" },
    { _id: 6, description: "bfa", amount: 60, category: "Entertainment" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState<Categories | "">("");
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category == selectedCategory)
    : expenses;
  return (
    <>
      <div className="mb-3">
        <ExpenseForm
          addExpense={(expense) => setExpenses([...expenses, expense])}
        />
      </div>
      <div className="mb-4">
        <ExpenseFilter
          onSelectedCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <div>
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(expenseId) =>
            setExpenses(expenses.filter((e) => e._id !== expenseId))
          }
        />
      </div>
    </>
  );
};

export default App;
