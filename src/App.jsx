import { use, useState } from "react";
import styles from "./App.module.css";
import ButtonGroup from "./components/ButtonGroup.jsx";
import Input from "./components/Input/Input.jsx";

function App() {
  const items = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
    "=",
  ];

  let [operand1, setOperand1] = useState("");
  let [operator, setOperator] = useState("");
  let [operand2, setOperand2] = useState("");
  let [result, setResult] = useState("0");
  let [flag1, setFlag1] = useState(false);
  let [flag2, setFlag2] = useState(false);
  let [flag3, setFlag3] = useState(false);
  let [displaFrameColor, setDisplayFrameColor] = useState("green");

  function operate(op1, op, op2) {
    switch (op) {
      case "+":
        return String(Number(op1) + Number(op2));
      case "-":
        return String(Number(op1) - Number(op2));
      case "*":
        return String(Number(op1) * Number(op2));
      case "/":
        return String(Number(op1) / Number(op2));
    }
  }

  const funButtonClicked = (event) => {
    // console.log("jdf");
    // let newOperand1 = event.target.innerText;
    // setOperand1(newOperand1);
    let currVal = event.target.innerText;
    if (currVal.charCodeAt(0) === 67) {
      setResult("0");
      setDisplayFrameColor("green");
    } else {
      if (flag1 === false) {
        setOperand1(currVal);
        setResult(currVal);
        console.log(currVal + " first operand");
        setFlag1(true);
        console.log("flag1 " + flag1);
      } else if (
        flag2 === false &&
        flag1 === true &&
        (currVal.charCodeAt(0) === 42 ||
          currVal.charCodeAt(0) === 43 ||
          currVal.charCodeAt(0) === 45 ||
          currVal.charCodeAt(0) === 47)
      ) {
        setOperator(currVal);
        console.log(currVal + "operator");
        setResult(operand1 + currVal);
        setFlag2(true);
        console.log("flag1 " + flag1);
        console.log("flag2 " + flag2);
      } else if (flag3 === false && flag1 === true && flag2 === true) {
        setOperand2(currVal);
        console.log(currVal + " Second operand");
        setResult(result + currVal);
        setFlag3(true);
      } else if (currVal === "=") {
        setFlag1(false);
        setFlag2(false);
        setFlag3(false);
        console.log(operand1, operator, operand2);
        setResult(operate(operand1, operator, operand2));
      } else {
        setFlag1(false);
        setFlag2(false);
        setFlag3(false);
        setDisplayFrameColor("red");
        setResult(": INCORRECT SYNTAX : ");
      }
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <Input calval={result} displayFrameColor={displaFrameColor}></Input>
        <ButtonGroup
          onButtonClick={funButtonClicked}
          items={items}
        ></ButtonGroup>
      </div>
    </>
  );
}

export default App;
