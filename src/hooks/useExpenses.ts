import { useQuery } from "@tanstack/react-query";
import { Expense } from "../entities/ExpenseTypes";
import apiClient from "../services/api-client";

const useExpenses = () => {
  return useQuery<Expense[]>({
    queryKey: ["expenses"],
    queryFn: async () =>
      apiClient
        .get("/expenses")
        .then((response) => response.data)
        .catch((err) => console.log(err)),
  });
};

export default useExpenses;
