import { useRouter } from "next/router";
import Head from "next/head";
import { Header } from "../header";

export const MainLayout = ({ title, children }) => {
  const router = useRouter();
  const isLoginOrRegister =
    router.pathname === "/login" || router.pathname === "/register";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {!isLoginOrRegister && <Header />}
      <main>{children}</main>
    </>
  );
};
