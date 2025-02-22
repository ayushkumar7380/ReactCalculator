import Button from "./Button";
import styles from "./ButtonGroup.module.css";

function ButtonGroup({ items, onButtonClick }) {
  return (
    <div className={styles.buttonContainer}>
      <Button fun={onButtonClick} items={items}></Button>
    </div>
  );
}

export default ButtonGroup;
