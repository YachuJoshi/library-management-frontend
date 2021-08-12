/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { withAuth } from "../auth";
import { useAuthContext } from "../context";
import { MainLayout } from "../layout";
import { Container, Heading } from "../components";
import { fetchStudentBookDetail } from "../services";
import { checkEmpty } from "../utils";
import { BooksGrid } from "../home";

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
        <Heading>{`${user.first_name}'s Book Inventory`}</Heading>
        {books.length ? (
          <BooksGrid books={books} />
        ) : (
          <p>No Books Currently In Your Inventory</p>
        )}
      </Container>
    </MainLayout>
  );
});
