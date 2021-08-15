import { BsFillStarFill } from "react-icons/bs";
import styles from "./BookSummary.module.scss";

export const BookSummary = () => {
  return (
    <article className={styles.BookSummary}>
      <h3 className={styles.Title}>Summary:</h3>
      <summary>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut
        tellus elementum.
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
  );
};
