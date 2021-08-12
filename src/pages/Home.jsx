/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { withAuth } from "../auth";
import { useAuthContext } from "../context";
import { MainLayout } from "../layout";
import { Container, Heading } from "../components";
import { fetchStudentBookDetail } from "../services";
import { checkEmpty } from "../utils";

import styles from "./Home.module.scss";

export const Home = withAuth(() => {
  const [books, setBooks] = useState([]);
  const { user: loggedInUser } = useAuthContext();
  const { userDetails: user } = loggedInUser;

  useEffect(async () => {
    try {
      if (!checkEmpty(user)) {
        const { data } = await fetchStudentBookDetail(user.student_id);
        console.table(data);
        setBooks(data);
      }
    } catch (err) {
      console.log(err);
    }
  }, [user]);

  return (
    <MainLayout title="Library Management | Home Page">
      <Container className={styles.Container}>
        <Heading>Hello, {user.first_name}</Heading>
        {books.map((book) => (
          <div key={book.isbn}>
            <span>
              {book.book_name} By {book.author}
            </span>
            <br />
          </div>
        ))}
      </Container>
    </MainLayout>
  );
});
