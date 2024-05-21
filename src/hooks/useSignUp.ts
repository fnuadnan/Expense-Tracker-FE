import { IUserSignUp } from "../entities/IUser";
import apiClient from "../services/api-client";

const useSignUp = () => {
  const signup = async (user: IUserSignUp) => {
    try {
      await apiClient.post("/users", user, {
        withCredentials: true,
      });
      return true;
    } catch (error) {
      console.error("Error: ", error);

      return false; // Fail
    }
  };

  return { signup };
};

export default useSignUp;
