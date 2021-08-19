import { api } from "../api";

export const fetchAllBooks = () => {
  return api.get("/books");
};

export const createBook = (bookDetails) => {
  return api.post("/books", bookDetails);
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

export const deleteBook = (bookISBN, bookId) => {
  return api.delete(`/books/${bookISBN}?bookId=${bookId}`);
};

export const leaseBook = (bookISBN, bookId) => {
  return api.post(`/books/${bookISBN}/lease?bookId=${bookId}`);
};

export const returnBook = (bookISBN, bookId) => {
  return api.post(`/books/${bookISBN}/return?bookId=${bookId}`);
};
