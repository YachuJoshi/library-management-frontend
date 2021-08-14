import { withAuth } from "../auth";
import { MainLayout } from "../layout";
import { Container, Heading } from "../components";

import styles from "./BooksDetail.module.scss";

export const BooksDetail = withAuth(({ book, allBooks }) => {
  return (
    <MainLayout title="Library Management | Books Detail">
      <Container>
        <Heading>Books Detail</Heading>
      </Container>
    </MainLayout>
  );
});
