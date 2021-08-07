/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { MainLayout } from "../layout";
import { Container } from "../components";
import { fetchAllStudents } from "../services";

export const Home = () => {
  useEffect(async () => {
    const { data } = await fetchAllStudents();
    console.log(data);
  }, []);

  return (
    <MainLayout title="Library Management | Home Page">
      <Container>Hello World</Container>
    </MainLayout>
  );
};
