import { useState } from "react";
import { IUserLogin } from "../entities/IUser";
import apiClient from "../services/api-client";
import encrypt from "../Utils/encrypt";

const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (user: IUserLogin) => {
    setLoading(true);
    setError(null);

    try {
      // Encrypt user data
      const encryptedData = encrypt(user);

      await apiClient.post(
        "/auth",
        { encryptedData },
        {
          withCredentials: true,
        }
      );

      // Only log non-sensitive information

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
