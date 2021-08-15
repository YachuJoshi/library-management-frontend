import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { withAuth } from "../auth";
import { BooksGrid } from "../books";
import { checkEmpty } from "../utils";
import { MainLayout } from "../layout";
import { useAuthContext } from "../context";
import { BookInfoSection, BookSummary, LeaseBookSection } from "../booksDetail";
import { fetchStudentBookDetail } from "../services";
import { Container, Heading } from "../components";

import styles from "./BooksDetail.module.scss";

export const BooksDetail = withAuth(({ book, allBooks }) => {
  const { book_name: bookName, is_available: isAvailable } = book;
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      if (!checkEmpty(student)) {
        const { data } = await fetchStudentBookDetail(student.student_id);
        setStudentBooks(data);
      }
    } catch (err) {
      console.log(err);
    }
  }, [student]);

  const onLease = async () => {};
  const onReturn = async () => {};

  return (
    <MainLayout title="Library Management | Books Detail">
      <Container>
        <Heading>{bookName}</Heading>
        <section className={styles.BookDetailSection}>
          <BookInfoSection book={book} />
          <BookSummary />
          <LeaseBookSection
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
