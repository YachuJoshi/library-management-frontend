import { withAuth } from "../auth";
import { MainLayout } from "../layout";
import { BooksGrid } from "../books";
import { Container, Heading } from "../components";

import styles from "./Books.module.scss";

export const Books = withAuth(({ availableBooks, allBooks }) => {
  return (
    <MainLayout title="Library Management | Books">
      <Container>
        <Heading>Books</Heading>
        <div className={styles.AvailableBooksSection}>
          <h2 className={styles.SectionTitle}>Available Books</h2>
          <BooksGrid books={availableBooks} />
        </div>
      </Container>
      <div className={styles.Wrapper}>
        <div className={styles.Background} />
        <Container className={styles.AllBooksSection}>
          <h2 className={styles.SectionTitle}>All Books In The Library</h2>
          <BooksGrid books={allBooks} />
        </Container>
      </div>
    </MainLayout>
  );
});
