import { api } from "../api";

export const loginUser = async (userName, password) => {
  return api.post("/auth/login", {
    username: userName,
    password,
  });
};
