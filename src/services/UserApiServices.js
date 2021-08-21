import { api } from "../api";

export const getUserByUserID = async (userId) => {
  return api.get(`/users?userId=${userId}`);
};
