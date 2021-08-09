import { useState } from "react";
import { FiLock } from "react-icons/fi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import styles from "./PasswordField.module.scss";

export const PasswordField = ({ password, setPassword }) => {
  const [isVisible, setIsVisible] = useState(false);
  const EyeIcon = !isVisible ? AiOutlineEyeInvisible : AiOutlineEye;

  return (
    <span className={styles.Password}>
      <FiLock className={styles.PasswordIcon} />
      <input
        type={isVisible ? "text" : "password"}
        name="password"
        required
        value={password}
        placeholder="Password"
        className={styles.PasswordInput}
        onChange={(e) => setPassword(e.target.value)}
      />
      <EyeIcon
        className={styles.EyeIcon}
        onClick={() => setIsVisible(!isVisible)}
      />
    </span>
  );
};
