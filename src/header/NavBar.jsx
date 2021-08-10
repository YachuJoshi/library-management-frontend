/* eslint-disable jsx-a11y/anchor-is-valid, no-undef */
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import cx from "classnames";

import { MobileNav } from "./MobileNav";
import { Container } from "../components";

import styles from "./NavBar.module.scss";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </li>
          <li className={styles.NavItem}>
            <Link href="/books">
              <a>Books</a>
            </Link>
          </li>
          <li className={styles.NavItem}>
            <Link href="#">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.NavItem}>
            <Link href="#">
              <a>Contact</a>
            </Link>
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
            className={cx(styles.Menu)}
          />
        </button>
        <MobileNav isOpen={isOpen} />
      </Container>
    </nav>
  );
};
