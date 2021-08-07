import cx from "classnames";

import styles from "./Container.module.scss";

export const Container = ({ className, children }) => {
  return <div className={cx(styles.Container, className)}>{children}</div>;
};
