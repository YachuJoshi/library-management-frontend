import styles from "./InputField.module.scss";

export const InputField = ({
  name,
  type,
  placeholder,
  icon: Icon,
  input,
  setInput,
  ...props
}) => {
  return (
    <span className={styles.UserName}>
      <Icon className={styles.UserIcon} />
      <input
        type={type}
        name={name}
        value={input}
        required
        placeholder={placeholder}
        className={styles.UserNameInput}
        onChange={(e) => setInput(e.target.value)}
        {...props}
      />
    </span>
  );
};
