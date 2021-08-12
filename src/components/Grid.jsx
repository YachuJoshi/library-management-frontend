import cx from "classnames";
import styles from "./Grid.module.scss";

export const Grid = ({ className, children }) => {
  return <ul className={cx(className, styles.Grid)}>{children}</ul>;
};
