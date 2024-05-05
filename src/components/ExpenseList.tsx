import useDeleteExpense from "../hooks/useDeleteExpense";
import useExpenses from "../hooks/useExpenses";
import useExpenseStore from "../store";

const ExpenseList = () => {
  // expenses
  const { data: expenses } = useExpenses();
  // deleteExpense
  const { mutate: deleteExpense } = useDeleteExpense();
  // selectedCategory
  const selectedCategory = useExpenseStore((s) => s.selectedCategory);
  // filteredExpenses
  const filteredExpenses = expenses?.filter((expense) =>
    selectedCategory ? expense.category === selectedCategory : true
  );

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {filteredExpenses?.map((expense, index) => (
          <tr key={index}>
            <td>{expense.description}</td>
            <td>{expense.amount}$</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteExpense(expense._id ? expense._id : "")}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td colSpan={4}>
            {filteredExpenses
              ?.reduce((acc, ex) => acc + ex.amount, 0)
              .toFixed(2)}
            $
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
