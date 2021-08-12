import Image from "next/image";
import styles from "./BooksCard.module.scss";

export const BooksCard = ({ book }) => {
  const num = Math.floor(Math.random() * 100 + 1);
  return (
    <div className={styles.BookCard}>
      <figure className={styles.BookCardFigure}>
        <Image
          src={`https://unsplash.it/360/200?image=${num}`}
          alt="Blog Cover"
          layout="fill"
          objectFit="cover"
          className={styles.BookCardImage}
        />
      </figure>
      <div className={styles.BookDetails}>
        <h2 className={styles.Name}>{book.book_name}</h2>
        <p className={styles.Author}>{book.author}</p>
        <p className={styles.Description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
          mattis enim ut tellus elementum.
        </p>
      </div>
    </div>
  );
};
