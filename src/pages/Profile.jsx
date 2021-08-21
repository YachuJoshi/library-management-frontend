import { withAuth } from "../auth";
import { MainLayout } from "../layout";
import { Container, Heading } from "../components";

import styles from "./Profile.module.scss";

export const Profile = () => {
  return (
    <MainLayout title="Library Management | Profile Page">
      <Container>Hello</Container>
    </MainLayout>
  );
};
