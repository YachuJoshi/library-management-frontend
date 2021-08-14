import Image from "next/image";
import { BsFillStarFill } from "react-icons/bs";

import { withAuth } from "../auth";
import { BooksGrid } from "../books";
import { MainLayout } from "../layout";
import { Container, Button, Heading } from "../components";

import styles from "./BooksDetail.module.scss";

export const BooksDetail = withAuth(({ book, allBooks }) => {
  const num = Math.floor(Math.random() * 50 + 1);
  const {
    book_name: bookName,
    isbn,
    author,
    publication,
    is_available: isAvailable,
  } = book;
  return (
    <MainLayout title="Library Management | Books Detail">
      <Container>
        <Heading>{bookName}</Heading>
        <section className={styles.BookDetailSection}>
          <div className={styles.BookInfo}>
            <Image
              height="420"
              width="600"
              loading="eager"
              src={`https://unsplash.it/600/420?image=${num}`}
              alt={bookName || "Book Cover"}
              className={styles.BookCover}
            />
            <div className={styles.BookDetails}>
              <p>ISBN: {isbn}</p>
              <p>By: {author}</p>
              <p>2020, {publication}</p>
            </div>
          </div>
          <article className={styles.BookSummary}>
            <h3 className={styles.Title}>Summary:</h3>
            <summary>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
              mattis enim ut tellus elementum.
            </summary>
            <div className={styles.Rating}>
              <h3 className={styles.Title}>Rating:</h3>
              <span className={styles.Stars}>
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
              </span>
            </div>
          </article>
          {isAvailable ? (
            <Button className={styles.LeaseBtn}>Lease Book</Button>
          ) : (
            <p className={styles.Text}>Book Not Available To Rent</p>
          )}
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
