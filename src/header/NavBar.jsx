/* eslint-disable jsx-a11y/anchor-is-valid, no-undef, react/button-has-type */
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MobileNav } from "./MobileNav";
import { Container } from "../components";
import { useAuthContext } from "../context";

import styles from "./NavBar.module.scss";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user: loggedInUser, logout } = useAuthContext();
  const { userDetails: _user } = loggedInUser;
  const router = useRouter();
  const icon = !isOpen ? "/icons/menu.svg" : "/icons/close-icon.svg";

  useEffect(() => {
    if (isOpen) {
      document.querySelector("html").style.overflowY = "hidden";
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    } else {
      document.querySelector("html").style.overflowY = "visible";
    }
  }, [isOpen]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <nav className={styles.NavigationBar}>
      <Container className={styles.Container}>
        <span className={styles.Logo}>
          <Link href="/">
            <a>Libby</a>
          </Link>
        </span>
        <ul className={styles.NavListDesktop}>
          <li className={styles.NavItem}>
            <Link href={`/profile?userId=${_user.user_id}`}>
              <a>Profile</a>
            </Link>
          </li>
          <li className={styles.NavItem}>
            <Link href="/explore">
              <a>Explore</a>
            </Link>
          </li>
          <li className={styles.NavItem}>
            <Link href="/books">
              <a>Books</a>
            </Link>
          </li>
          <li className={styles.NavItem}>
            <Link href="/books/add">
              <a>Add</a>
            </Link>
          </li>
          <li className={styles.NavItem}>
            <button onClick={handleLogout} className={styles.LogoutBtn}>
              Logout
            </button>
          </li>
        </ul>
        <button
          type="button"
          className={styles.NavMenuButton}
          onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
        >
          <Image
            src={icon}
            alt="Menu"
            height={19}
            width={19}
            className={styles.Menu}
          />
        </button>
        <MobileNav isOpen={isOpen} handleLogout={handleLogout} />
      </Container>
    </nav>
  );
};
