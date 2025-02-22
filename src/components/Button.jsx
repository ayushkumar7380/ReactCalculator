import styles from "./Button.module.css";

function Button({ items, fun }) {
  return (
    <>
      {items.map((item, index) => (
        <button key={index} className={styles.buttons} onClick={fun}>
          {item}
        </button>
      ))}
    </>
  );
}
export default Button;
