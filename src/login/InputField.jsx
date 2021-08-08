import { AiOutlineUser } from "react-icons/ai";
import styles from "./InputField.module.scss";

export const InputField = ({ input, setInput }) => {
  return (
    <span className={styles.UserName}>
      <AiOutlineUser className={styles.UserIcon} />
      <input
        type="text"
        name="userName"
        value={input}
        required
        placeholder="Username"
        className={styles.UserNameInput}
        onChange={(e) => setInput(e.target.value)}
      />
    </span>
  );
};
