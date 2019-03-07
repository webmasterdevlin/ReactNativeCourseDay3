import { Platform } from "react-native";

export const BaseUrl = {
  loginUrl:
    Platform.OS === "android"
      ? "http://10.0.2.2:5000/api/auth/login"
      : "http://localhost:5000/api/auth/login",
  registerUrl:
    Platform.OS === "android"
      ? "http://10.0.2.2:5000/api/register"
      : "http://localhost:5000/api/register"
};
