/* eslint-disable react-hooks/exhaustive-deps, no-nested-ternary */
import { useState, useEffect } from "react";
import Link from "next/link";
import { withAuth } from "../auth";
import { BooksGrid } from "../books";
import { ROLES } from "../constants";
import { checkEmpty } from "../utils";
import { MainLayout } from "../layout";
import { StudentBookRecord } from "../home";
import { useAuthContext } from "../context";
import { Container, Heading } from "../components";
import {
  fetchStudentBookDetail,
  fetchAllStudentBooksRecord,
} from "../services";

import styles from "./Home.module.scss";

export const Home = withAuth(() => {
  const [books, setBooks] = useState([]);
  const [studentBooksRecord, setStudentBooksRecord] = useState([]);
  const { user: loggedInUser } = useAuthContext();
  const { userDetails: _user } = loggedInUser;
  const headingText =
    _user.role === 1
      ? `${_user.first_name}'s Book Inventory`
      : `Welcome Back ${_user.first_name}`;

  useEffect(async () => {
    try {
      if (!checkEmpty(_user)) {
        if (_user?.role === 1) {
          const { data } = await fetchStudentBookDetail(_user.student_id);
          setBooks(data);
          return;
        }
        const { data } = await fetchAllStudentBooksRecord();
        setStudentBooksRecord(data);
      }
    } catch (err) {
      console.log(err);
    }
  }, [_user]);

  return (
    <MainLayout title="Library Management | Home Page">
      <Container className={styles.Container}>
        <Heading>{headingText}</Heading>
        {books.length ? (
          <BooksGrid books={books} />
        ) : (
          _user.role === ROLES.STUDENT && (
            <div className={styles.SeeMoreBooks}>
              <p className={styles.Text}>
                No Books Currently In Your Inventory
              </p>
              <Link href="/books">
                <a>See Available Books</a>
              </Link>
            </div>
          )
        )}
        {studentBooksRecord.length && _user.role === ROLES.ADMIN ? (
          <StudentBookRecord studentBooksRecord={studentBooksRecord} />
        ) : null}
      </Container>
    </MainLayout>
  );
});
