/* eslint-disable no-undef */
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";

import { withAuth } from "../auth";
import { BooksGrid } from "../books";
import { ROLES } from "../constants";
import { checkEmpty } from "../utils";
import { MainLayout } from "../layout";
import { useAuthContext } from "../context";
import { toast, Container, Heading } from "../components";
import {
  deleteBook,
  leaseBook,
  returnBook,
  fetchStudentBookDetail,
} from "../services";
import { BookInfoSection, BookSummary, LeaseBookSection } from "../booksDetail";

import styles from "./BooksDetail.module.scss";

export const BooksDetail = withAuth(({ book, allBooks }) => {
  const { book_name: bookName, isbn, is_available: isAvailable } = book;
  const { user: loggedInUser } = useAuthContext();
  const { userDetails: student } = loggedInUser;
  const router = useRouter();
  const { query } = router;
  const [studentBooks, setStudentBooks] = useState([]);
  const { isbn: queryBookISBN, bookId } = query;
  const studentHasBook = studentBooks.find(
    (studentBook) =>
      studentBook.isbn === queryBookISBN && studentBook.book_id === bookId
  );

  const notify = useCallback((type, message) => {
    toast({ type, message });
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      if (!checkEmpty(student) && student.role === ROLES.STUDENT) {
        const { data } = await fetchStudentBookDetail(student.student_id);
        setStudentBooks(data);
      }
    } catch (err) {
      console.log(err);
    }
  }, [student]);

  const onUpdate = async () => {
    router.push(`/books/add?isbn=${isbn}`);
  };

  const onDelete = async () => {
    try {
      await deleteBook(isbn, bookId);
      notify("success", `${bookName} has been successfully deleted!`);
      router.push("/books");
    } catch (e) {
      notify("error", "Something Went Wrong!");
      console.log(e);
    }
  };

  const onLease = async () => {
    try {
      await leaseBook(isbn, bookId);
      notify("success", `${bookName} has been successfully leased!`);
      setTimeout(() => router.reload(window.location.pathname), 500);
    } catch (e) {
      notify("error", "Something Went Wrong!");
      console.log(e);
    }
  };
  const onReturn = async () => {
    try {
      await returnBook(isbn, bookId);
      notify("success", `${bookName} has been successfully returned!`);
      setTimeout(() => router.reload(window.location.pathname), 500);
    } catch (e) {
      notify("error", "Something Went Wrong!");
      console.log(e);
    }
  };

  return (
    <MainLayout title="Library Management | Books Detail">
      <Container>
        <Heading>{bookName}</Heading>
        <section className={styles.BookDetailSection}>
          <BookInfoSection book={book} />
          <BookSummary />
          <LeaseBookSection
            student={student}
            onUpdate={onUpdate}
            onDelete={onDelete}
            onLease={onLease}
            onReturn={onReturn}
            isAvailable={isAvailable}
            studentHasBook={studentHasBook}
          />
        </section>
      </Container>
      <div className={styles.AllBooksSection}>
        <Container>
          <h2 className={styles.SectionTitle}>More Books</h2>
          <BooksGrid books={allBooks} />
        </Container>
      </div>
    </MainLayout>
  );
});
