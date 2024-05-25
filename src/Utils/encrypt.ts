import CryptoJS from "crypto-js";
import { IUserLogin } from "../entities/IUser";

function encrypt(user: IUserLogin): string {
  const secretKey = process.env.VITE_SECRET_KEY_ENCRYPT as string;

  if (!secretKey) {
    throw new Error("Secret key not defined");
  }

  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(user),
    secretKey
  ).toString();

  return encryptedData;
}

export default encrypt;
