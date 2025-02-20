import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.calculator}>
        <input type="text" className={styles.display} />
        <div className={styles.buttonContainer}>
          <button className={styles.button}>C</button>
          <button className={styles.button}>C</button>
          <button className={styles.button}>C</button>
          <button className={styles.button}>C</button>
          <button className={styles.button}>C</button>
          <button className={styles.button}>C</button>
          <button className={styles.button}>C</button>
          <button className={styles.button}>C</button>
        </div>
      </div>
    </>
  );
}

export default App;
