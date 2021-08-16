/* eslint-disable react/no-array-index-key, react-hooks/exhaustive-deps, no-nested-ternary */
import { useState, useEffect } from "react";
import Link from "next/link";
import { withAuth } from "../auth";
import { BooksGrid } from "../books";
import { MainLayout } from "../layout";
import { useAuthContext } from "../context";
import { Container, Heading } from "../components";
import { checkEmpty, filter, capitalize } from "../utils";
import {
  fetchStudentBookDetail,
  fetchAllStudentBooksRecord,
} from "../services";

import styles from "./Home.module.scss";

export const Home = withAuth(() => {
  const [books, setBooks] = useState([]);
  const [studentBooksRecord, setStudentBooksRecord] = useState([]);
  const { user: loggedInUser } = useAuthContext();
  const { userDetails: user } = loggedInUser;
  const headingText =
    user.role === 1
      ? `${user.first_name}'s Book Inventory`
      : `Welcome Back ${user.first_name}`;

  useEffect(async () => {
    try {
      if (!checkEmpty(user)) {
        if (user?.role === 1) {
          const { data } = await fetchStudentBookDetail(user.student_id);
          setBooks(data);
          return;
        }
        const { data } = await fetchAllStudentBooksRecord();
        setStudentBooksRecord(data);
      }
    } catch (err) {
      console.log(err);
    }
  }, [user]);

  return (
    <MainLayout title="Library Management | Home Page">
      <Container className={styles.Container}>
        <Heading>{headingText}</Heading>
        {books.length ? (
          <BooksGrid books={books} />
        ) : (
          user.role === 1 && (
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
        {studentBooksRecord.length && user.role === 0 ? (
          <>
            <p className={styles.Text}>Student&apos;s Book Record</p>
            <table className={styles.StudentBookRecordsTable}>
              <thead>
                <tr>
                  {filter(Object.keys(studentBooksRecord[0])).map((key) => (
                    <th key={key}>
                      {key !== "isbn" ? capitalize(key) : key.toUpperCase()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {studentBooksRecord.map((record, index) => (
                  <tr key={index}>
                    <td>{record.student_name}</td>
                    <td>{record.isbn}</td>
                    <td>{record.book_name}</td>
                    <td>{record.author}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : null}
      </Container>
    </MainLayout>
  );
});
