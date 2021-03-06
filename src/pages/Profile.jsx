/* eslint-disable react/no-array-index-key */
import Image from "next/image";
import { withAuth } from "../auth";
import { ROLES } from "../constants";
import { capitalize } from "../utils";
import { MainLayout } from "../layout";
import { useAuthContext } from "../context";
import { Container, Heading } from "../components";

import styles from "./Profile.module.scss";

export const Profile = withAuth(({ user, fee }) => {
  const { user: loggedInUser } = useAuthContext();
  const { userDetails: _user } = loggedInUser;
  const fullName = `${user.first_name} ${user.last_name}`;
  const role = _user.role === ROLES.ADMIN ? "Admin" : "Student";
  const lateFee = fee.reduce(
    (acc, { late_due_days: lateDueDays }) => acc + lateDueDays,
    0
  );

  return (
    <MainLayout title="Library Management | Profile Page">
      <Container>
        <Heading>Profile Page</Heading>
        <section className={styles.ProfileSection}>
          <Image
            className={styles.UserImage}
            alt={`${user.first_name}` || "User"}
            src="/user.png"
            height="500"
            width="500"
          />
          <div className={styles.UserSummary}>
            <p className={styles.FullName}>{fullName}</p>
            <p className={styles.Role}>{role} </p>
          </div>
          <ul className={styles.UserDetails}>
            {Object.keys(user).map((key, index) => {
              if (key === "user_id") return null;
              const value = user[key];
              return (
                <li key={index} className={styles.UserDetailsItem}>
                  <span className={styles.Key}>{capitalize(key)}</span>
                  <span className={styles.Value}>{value}</span>
                </li>
              );
            })}
            {_user.role === ROLES.STUDENT && (
              <li key={8} className={styles.UserDetailsItem}>
                <span className={styles.Key}>Late Fee</span>
                <span className={styles.Value}>{`$${lateFee}.00`}</span>
              </li>
            )}
          </ul>
        </section>
      </Container>
    </MainLayout>
  );
});
