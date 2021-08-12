import Link from "next/link";

import { Grid } from "../components";
import { BooksCard } from "./BooksCard";

import styles from "./BooksGrid.module.scss";

export const BooksGrid = ({ books }) => {
  return (
    <Grid className={styles.Grid}>
      {books.map((book) => (
        <li key={book.isbn} className={styles.BookItem}>
          <Link
            key={book.isbn}
            href={`/books/${book.isbn}?bookId=${book.book_id}`}
          >
            <a>
              <BooksCard book={book} />
            </a>
          </Link>
        </li>
      ))}
    </Grid>
  );
};
