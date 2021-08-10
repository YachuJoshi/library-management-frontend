/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { withAuth } from "../auth";
import { useAuthContext } from "../context";
import { MainLayout } from "../layout";
import { Container } from "../components";

export const Home = withAuth(() => {
  const router = useRouter();
  const { user, logout } = useAuthContext();

  return (
    <MainLayout title="Library Management | Home Page">
      <Container>
        <div>Hello {user.userDetails.first_name}</div>
      </Container>
    </MainLayout>
  );
});
