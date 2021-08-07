import { api } from "../api";

export const fetchAllStudents = () => {
  return api.get("/students");
};

export const fetchtStudentById = (id) => {
  return api.get(`/students/${id}`);
};

export const fetchStudentBookDetail = (id) => {
  return api.get(`/students/${id}/books`);
};
