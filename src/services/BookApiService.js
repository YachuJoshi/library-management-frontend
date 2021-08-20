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
  return api.get("/books/details");
};

export const fetchBookDetailByISBN = (isbn) => {
  return api.get(`/books/details/${isbn}`);
};

export const updateBook = (bookDetails) => {
  return api.patch(`/books/${bookDetails.isbn}`, bookDetails);
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
