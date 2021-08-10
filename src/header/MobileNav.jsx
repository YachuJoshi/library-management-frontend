import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

import { AiOutlineUser } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { BiDonateHeart } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";

import styles from "./MobileNav.module.scss";

export const MobileNav = ({ isOpen }) => {
  return (
    <div
      className={cx(styles.Overlay, {
        [styles.OverlayActive]: isOpen,
      })}
    >
      <div className={styles.NavMobileWrapper}>
        <ul className={styles.NavMobile}>
          <li className={styles.NavMobileItem}>
            <span className={styles.Item}>
              <AiOutlineUser className={styles.ItemIcon} />
              <Link href="/profle">
                <a>Profle</a>
              </Link>
            </span>
          </li>
          <li className={styles.NavMobileItem}>
            <span className={styles.Item}>
              <ImBooks className={styles.ItemIcon} />
              <Link href="Books">
                <a>Books</a>
              </Link>
            </span>
          </li>
          <li className={styles.NavMobileItem}>
            <span className={styles.Item}>
              <BiDonateHeart className={styles.ItemIcon} />
              <Link href="#">
                <a>About</a>
              </Link>
            </span>
          </li>
          <li className={styles.NavMobileItem}>
            <span className={styles.Item}>
              <FiPhone className={styles.ItemIcon} />
              <Link href="#">
                <a>Contact</a>
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};