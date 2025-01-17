import styles from "./Button.module.css";
function Button({ type, onclick, children }) {
  return (
    <button className={styles[type]} onClick={onclick}>
      {children}
    </button>
  );
}

export default Button;
