/* eslint-disable react/button-has-type */
import cx from "classnames";
import styles from "./Button.module.scss";

export const Button = ({ className, kind, children, ...props }) => {
  return (
    <button
      className={cx(styles.Button, className, {
        [styles.Ghost]: kind === "ghost",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
