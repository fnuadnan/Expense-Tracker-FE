import useExpenses from "../hooks/useExpenses";

const ExpenseList = () => {
  const { data } = useExpenses();
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
        {data?.map((expense, index) => (
          <tr key={index}>
            <td>{expense.description}</td>
            <td>{expense.amount}$</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                // onClick={() => expense._id && onDelete(expense._id)}
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
            {data?.reduce((acc, ex) => acc + ex.amount, 0).toFixed(2)}$
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
