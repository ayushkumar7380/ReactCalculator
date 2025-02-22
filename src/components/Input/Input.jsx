import styles from "./Input.module.css";

function Input({ calval, displayFrameColor }) {
  return (
    <input
      type="text"
      className={styles.display}
      value={calval}
      readOnly
      style={{ border: "5px solid " + displayFrameColor }}
    />
  );
}

export default Input;
