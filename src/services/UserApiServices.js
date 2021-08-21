import { api } from "../api";

export const fetchUserByUserId = async (userId) => {
  return api.get(`/users?userId=${userId}`);
};
