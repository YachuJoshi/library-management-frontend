/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { withAuth } from "../auth";
import { useAuthContext } from "../context";
import { MainLayout } from "../layout";
import { Button, Container } from "../components";

export const Home = withAuth(() => {
  const router = useRouter();
  const { user, logout } = useAuthContext();
  console.log(user);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <MainLayout title="Library Management | Home Page">
      <Container>
        <div>Hello {user.userDetails.first_name}</div>
        <Button onClick={handleLogout}>Logout</Button>
      </Container>
    </MainLayout>
  );
});
