import { Categories } from "../entities/ExpenseTypes";
import useExpenseStore from "../store";

const ExpenseFilter = () => {
  const setSelectedCategory = useExpenseStore(
    (state) => state.setSelectedCategory
  );
  return (
    <select
      onChange={(event) =>
        setSelectedCategory(event.target.value as Categories)
      }
      name="category"
      id="category"
      className="form-select"
    >
      <option value="">All categories</option>
      <option value="Utilities">Utilities</option>
      <option value="Groceries">Groceries</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
