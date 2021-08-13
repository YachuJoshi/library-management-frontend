import { api } from "../api";

export const fetchAllBooks = () => {
  return api.get("/books");
};

export const fetchBookByISBN = (isbn) => {
  return api.get(`/books/${isbn}`);
};

export const fetchAvailableBooks = () => {
  return api.get("/books/available");
};

export const fetchAllUniqueBooks = () => {
  return api.get("/books/all");
};
