import { api } from "../api";

export const fetchAllStudents = () => {
  return api.get("/students");
};

export const fetchtStudentById = (id) => {
  return api.get(`/students/${id}`);
};

export const fetchAllStudentBooksRecord = () => {
  return api.get("/students/books");
};

export const fetchStudentBookDetail = (id) => {
  return api.get(`/students/${id}/books`);
};

export const createStudent = (studentInfo) => {
  return api.post("/students", studentInfo);
};

export const fetchStudentFeeDetail = (id) => {
  return api.get(`/students/${id}/fee`);
};
