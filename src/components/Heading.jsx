import cx from "classnames";
import styles from "./Heading.module.scss";

export const Heading = ({ className, children }) => {
  return <h1 className={cx(className, styles.Heading)}>{children}</h1>;
};
