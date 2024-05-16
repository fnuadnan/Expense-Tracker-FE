import axios from "axios";
import { useState } from "react";
import { IUserLogin } from "../entities/IUser";

const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (user: IUserLogin) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post("http://localhost:4000/api/auth", user, {
        withCredentials: true,
      });
      console.log(res.data);

      return true;
    } catch (error) {
      setError("Authentication failed");
      console.error("Error: ", error);

      return false;
    }
  };

  return { login, error, loading };
};

export default useAuth;
