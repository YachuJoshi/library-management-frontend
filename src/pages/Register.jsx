import { MainLayout } from "../layout";
import styles from "./Register.module.scss";

export const Register = () => {
  return (
    <MainLayout title="Library Management | Login Page">
      <div className={styles.Background} />
      <section>
        <form>
          <div>
            <h2>Personal Information</h2>
            <label htmlFor="firstName">
              First Name
              <input type="text" placeholder="Full Name" id="firstName" />
            </label>
            <label htmlFor="lastName">
              Last Name
              <input type="text" placeholder="Full Name" id="lastName" />
            </label>
          </div>
          <div>
            <h2>Contact Information</h2>
            <label htmlFor="name">
              Full Name
              <input type="text" placeholder="Full Name" id="name" />
            </label>
            <label htmlFor="name">
              Full Name
              <input type="text" placeholder="Full Name" id="name" />
            </label>
          </div>
        </form>
      </section>
    </MainLayout>
  );
};
