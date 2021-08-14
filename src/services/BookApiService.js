import { api } from "../api";

export const fetchAllBooks = () => {
  return api.get("/books");
};

export const fetchBookByISBN = (isbn, params) => {
  return api.get(`/books/${isbn}`, { params });
};

export const fetchAvailableBooks = () => {
  return api.get("/books/available");
};

export const fetchAllUniqueBooks = () => {
  return api.get("/books/all");
};
