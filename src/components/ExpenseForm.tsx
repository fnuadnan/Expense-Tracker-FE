import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Expense, ExpenseFormData } from "../types/ExpenseTypes";

interface Props {
  addExpense: (expense: Expense) => void;
}

const expenseFormSchema = z.object({
  description: z.string().min(3),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(1, { message: "Amount must be greater or equal to 1$" }),
  category: z.enum(["Utilities", "Groceries", "Entertainment"], {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

const ExpenseForm = ({ addExpense }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(expenseFormSchema),
  });
  return (
    <form
      className="p-3"
      onSubmit={handleSubmit((data: Expense) => addExpense(data))}
    >
      <div className="mb-3">
        <label className="form-label" htmlFor="description">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          className="form-control"
          type="text"
        />
        {errors.description && (
          <p className="text-danger">{errors.description?.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="description">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          className="form-control"
          type="number"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount?.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="category">
          Category
        </label>
        <select
          {...register("category")}
          className="form-select"
          name="category"
          id="category"
        >
          <option value=""></option>
          <option value="Utilities">Utilities</option>
          <option value="Groceries">Groceries</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category?.message}</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
