/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/label-has-associated-control */
import { useState } from "react";
import Link from "next/link";
import {
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { Button } from "../components";

import { MainLayout } from "../layout";

import styles from "./Login.module.scss";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const EyeIcon = isVisible ? AiOutlineEyeInvisible : AiOutlineEye;

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
            <span className={styles.UserName}>
              <AiOutlineUser className={styles.UserIcon} />
              <input
                type="text"
                name="userName"
                value={userName}
                required
                placeholder="Username"
                className={styles.UserNameInput}
                onChange={(e) => setUserName(e.target.value)}
              />
            </span>
            <span className={styles.Password}>
              <FiLock className={styles.PasswordIcon} />
              <input
                type={isVisible ? "text" : "password"}
                name="password"
                required
                value={password}
                placeholder="Password"
                className={styles.PasswordInput}
                onChange={(e) => setPassword(e.target.value)}
              />
              <EyeIcon
                className={styles.EyeIcon}
                onClick={() => setIsVisible(!isVisible)}
              />
            </span>
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
