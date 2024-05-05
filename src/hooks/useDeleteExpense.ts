import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Expense } from "../entities/ExpenseTypes";
import apiClient from "../services/api-client";

const useDeleteExpense = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (expenseId: string) =>
      apiClient.delete(`/expenses/${expenseId}`),

    onMutate: async (expenseId: string) => {
      await queryClient.cancelQueries({ queryKey: ["expenses"] });
      const previousExpenses = queryClient.getQueryData<Expense[]>([
        "expenses",
      ]);

      // Optimistically update to the new value
      if (previousExpenses) {
        queryClient.setQueryData<Expense[]>(
          ["expenses"],
          previousExpenses?.filter(
            (expense: Expense) => expense._id !== expenseId
          )
        );
      }

      return { previousExpenses };
    },
    onError: (_err, _newExpense, context) => {
      // Roll back the optimistic update if previousExpenses existed
      if (context?.previousExpenses) {
        queryClient.setQueryData(["expenses"], context.previousExpenses);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });
};

// pesimictic update
// const useDeleteExpense = () => {
// 	const queryClient = useQueryClient();

// 	return useMutation({
// 	  mutationFn: (expenseId: number) =>
// 		apiClient.delete(`/expenses/${expenseId}`),

// 	  // No need for onMutate in pessimistic updates

// 	  onError: (err) => {
// 		// No need to handle optimistic updates in case of errors
// 		console.error("An error occurred while deleting the expense:", err);
// 	  },

// 	  onSuccess: () => {
// 		queryClient.invalidateQueries({ queryKey: ["expenses"] });
// 	  },
// 	});
//   };

export default useDeleteExpense;
