import { Button } from "../components";
import styles from "./LeaseBookSection.module.scss";

export const LeaseBookSection = ({
  onLease,
  onReturn,
  isAvailable,
  studentHasBook,
}) => {
  if (isAvailable) {
    return (
      <Button onClick={onLease} className={styles.LeaseBtn}>
        Lease Book
      </Button>
    );
  }
  if (studentHasBook) {
    return (
      <Button onClick={onReturn} className={styles.LeaseBtn}>
        Return Book
      </Button>
    );
  }
  return <p className={styles.Text}>Book Not Available To Rent</p>;
};
