import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Expense } from "../entities/ExpenseTypes";
import apiClient from "../services/api-client";

// optimistic update 
const useAddExpense = () => {
  const queryClient = useQueryClient(); // Initialize queryClient

  return useMutation({
    mutationFn: (expense: Expense) => apiClient.post("/expenses", expense),

    onMutate: async (newExpense: Expense) => {
      await queryClient.cancelQueries({ queryKey: ["expenses"] });
      const previousExpenses = queryClient.getQueryData<Expense[]>([
        "expenses",
      ]);

      // Optimistically update to the new value
      if (previousExpenses) {
        queryClient.setQueryData<Expense[]>(
          ["expenses"],
          [...previousExpenses, newExpense]
        );
      }
      return { previousExpenses };
    },
    onError: (err, newExpense, context) => {
      // Roll back the optimistic update if previousExpenses existed
      if (context?.previousExpenses) {
        queryClient.setQueryData(["expenses"], context.previousExpenses);
      }
    },
    onSuccess: () => {
      // Invalidate the query to refetch the updated data
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });
};

// pesimistic update
// const useAddExpense = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (expense: Expense) => apiClient.post("/expenses", expense),
//     onSuccess: () => {
//       // Invalidate the query to refetch the updated data
//       queryClient.invalidateQueries({ queryKey: ["expenses"] });
//     },
//   });
// };

export default useAddExpense;
