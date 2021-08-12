import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiPhone, BiCode } from "react-icons/bi";
import { AiOutlineUser, AiOutlineHome, AiOutlineMail } from "react-icons/ai";

import { MainLayout } from "../layout";
import { Button } from "../components";
import { InputField, PasswordField } from "../form";

import styles from "./Register.module.scss";

export const Register = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      router.push("/");
    }
  }, [router]);

  return (
    <MainLayout title="Library Management | Register Page">
      <div className={styles.Background} />
      <section className={styles.RegisterSection}>
        <div className={styles.RegisterModal}>
          <h2 className={styles.Heading}>Register</h2>
          <form className={styles.RegisterForm}>
            <div className={styles.PersonalInfo}>
              <h3 className={styles.Title}>Personal Info</h3>
              <InputField
                icon={AiOutlineUser}
                type="text"
                name="name"
                placeholder="Full Name"
                input={name}
                setInput={setName}
              />
              <InputField
                icon={AiOutlineHome}
                type="text"
                name="address"
                placeholder="Address"
                input={address}
                setInput={setAddress}
              />
              <div className={styles.Detail}>
                <InputField
                  icon={BiPhone}
                  type="tel"
                  pattern="[0-9]{10}"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  input={phoneNumber}
                  setInput={setPhoneNumber}
                />
                <InputField
                  icon={BiCode}
                  type="text"
                  name="rollNumber"
                  placeholder="Roll No"
                  input={rollNumber}
                  setInput={setRollNumber}
                />
              </div>
            </div>
            <div className={styles.ContactInfo}>
              <h3 className={styles.Title}>Contact Info</h3>
              <InputField
                type="text"
                name="userName"
                placeholder="Username"
                icon={AiOutlineUser}
                input={userName}
                setInput={setUserName}
              />
              <InputField
                icon={AiOutlineMail}
                type="email"
                name="email"
                placeholder="Email Address"
                input={email}
                setInput={setEmail}
              />
              <PasswordField password={password} setPassword={setPassword} />
            </div>
            <div className={styles.Buttons}>
              <Button
                type="submit"
                kind="primary"
                className={styles.SubmitButton}
              >
                Register
              </Button>
              <Link href="/login">
                <a>
                  <Button kind="ghost" className={styles.LoginButton}>
                    Login
                  </Button>
                </a>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};
