import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Expense } from "../types/ExpenseTypes";

const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<Expense[]>("/expenses")
      .then((res) => setExpenses(res.data))
      .catch((err) => setError(err));
  }, []);

  return { expenses, error };
};

export default useExpenses;
