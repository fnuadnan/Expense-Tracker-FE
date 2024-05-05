import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  return (
    <>
      <div className="mb-3">
        <ExpenseForm />
      </div>
      <div className="mb-4">
        <ExpenseFilter />
      </div>
      <div>
        <ExpenseList />
      </div>
    </>
  );
};

export default App;
