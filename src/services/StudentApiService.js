import { api } from "../api";

export const fetchAllStudents = () => {
  return api.get("/students");
};

export const fetchtStudentById = (id) => {
  return api.get(`/students/${id}`);
};

export const fetchStudentBookDetail = (id) => {
  const accessToken = localStorage.getItem("accessToken");
  return api.get(`/students/${id}/books`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
