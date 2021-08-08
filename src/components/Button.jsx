/* eslint-disable react/button-has-type */
import cx from "classnames";
import styles from "./Button.module.scss";

export const Button = ({ className, children, ...props }) => {
  return (
    <button className={cx(styles.Button, className)} {...props}>
      {children}
    </button>
  );
};
