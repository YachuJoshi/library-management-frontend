import Image from "next/image";
import styles from "./BookInfoSection.module.scss";

export const BookInfoSection = ({ book }) => {
  const num = Math.floor(Math.random() * 50 + 1);
  const { book_name: bookName, isbn, author, publication, genres } = book;

  return (
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
        <p>2021, {publication}</p>
        <p>{genres.join(", ")}</p>
      </div>
    </div>
  );
};
