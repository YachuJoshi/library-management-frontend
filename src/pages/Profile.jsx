/* eslint-disable */
import { withAuth } from "../auth";
import { MainLayout } from "../layout";
import { Container, Heading } from "../components";

import styles from "./Profile.module.scss";

export const Profile = withAuth(({ user }) => {
  return (
    <MainLayout title="Library Management | Profile Page">
      <Container>
        <Heading>Profile Page</Heading>
      </Container>
    </MainLayout>
  );
});
