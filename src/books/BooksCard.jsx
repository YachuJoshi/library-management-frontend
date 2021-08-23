import cx from "classnames";
import Image from "next/image";
import styles from "./BooksCard.module.scss";

export const BooksCard = ({ book }) => {
  const num = Math.floor(Math.random() * 50 + 1);
  const { late_due_days: lateDueDays } = book;
  return (
    <div className={styles.BookCard}>
      {lateDueDays && (
        <span
          className={cx(styles.LateDueDays, {
            [styles.Late]: lateDueDays > 0,
          })}
        >
          {lateDueDays < 0 ? -lateDueDays : lateDueDays} Days Left
        </span>
      )}
      <figure className={styles.BookCardFigure}>
        <Image
          src={`https://unsplash.it/360/200?image=${num}`}
          alt="Book Cover"
          layout="fill"
          loading="eager"
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
