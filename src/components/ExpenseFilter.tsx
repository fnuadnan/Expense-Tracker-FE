import { Categories } from "../entities/ExpenseTypes";

interface Props {
  onSelectedCategory: (category: Categories) => void;
}

const ExpenseFilter = () => {
  return (
    <select
      onChange={(event) => console.log(event.target.value)}
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
