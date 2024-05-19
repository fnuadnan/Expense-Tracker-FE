import { useState } from "react";
import { IUserLogin } from "../entities/IUser";
import apiClient from "../services/api-client";

const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (user: IUserLogin) => {
    setLoading(true);
    setError(null);

    try {
      const res = await apiClient.post("/auth", user, {
        withCredentials: true,
      });
      console.log(res.data);

      return true; // Success
    } catch (error) {
      setError("Authentication failed");
      console.error("Error: ", error);

      return false; // Fail
    }
  };

  return { login, error, loading };
};

export default useAuth;