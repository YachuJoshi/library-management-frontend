/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/label-has-associated-control */
import { useState } from "react";
import Link from "next/link";

import { Button } from "../components";
import { InputField, PasswordField } from "../login";

import { MainLayout } from "../layout";

import styles from "./Login.module.scss";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <MainLayout title="Library Management | Login Page">
      <section className={styles.LoginSection}>
        <div className={styles.Background} />
        <div className={styles.LoginModal}>
          <h2 className={styles.Heading}>Login</h2>
          <form onSubmit={onSubmit} className={styles.LoginForm}>
            <InputField input={userName} setInput={setUserName} />
            <PasswordField password={password} setPassword={setPassword} />
            <Button type="submit" className={styles.SubmitButton}>
              Login
            </Button>
          </form>
          <p className={styles.Create}>
            Dont have an account?
            <br />
            <Link href="/register">
              <a className={styles.CreateAccButton}>Create Account</a>
            </Link>
          </p>
        </div>
      </section>
    </MainLayout>
  );
};
