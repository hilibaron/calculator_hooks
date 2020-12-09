import './Calculator.css';
import { Card } from 'antd';
import { useState, useEffect } from 'react';
import CalcButtonDisplay from '../CalcButton/CalcButtonDisplay';

function Calculator() {

    const [prevValue, setPrev] = useState(null);
    const [nextValue, setNext] = useState("0");
    const [formola, setFormola] = useState("");
    const [action, setAction] = useState(null);

    useEffect(() => {}, [action, nextValue, prevValue]);

    const calcButtons = ["AC", "\xB1", "%", "+", 7, 8, 9,
     "-", 4, 5, 6, "*", 1, 2, 3, "/", 0, ".", "="]
  
    const CalculatorActions = {
      "/": (firstValue, secondValue) => firstValue / secondValue,
      "*": (firstValue, secondValue) => firstValue * secondValue,
      "+": (firstValue, secondValue) => firstValue + secondValue,
      "-": (firstValue, secondValue) => firstValue - secondValue,
      "=": (firstValue, secondValue) => secondValue,
    };

    const insertDot = () => {
      if (!/\./.test(nextValue)) {
        setNext(nextValue + ".");
        setFormola(nextValue+ ".");
      }
    };

    const percentage = () => {
      let nextVal = parseFloat(nextValue) / 100;
      setNext(nextVal);
      setFormola(nextVal);
      if (prevValue && nextValue === "") {
        setPrev(parseFloat(prevValue) / 100);
      }
    };

    const changeSign = () => {
      let nextVal = parseFloat(nextValue) * (-1);
      setNext(nextVal);
      setFormola(nextVal);
    };
    
    const reset = () => {
      setNext("0");
      setPrev(0);
      setFormola("");
    };
  
    const handleNumer = (number) => {
      const currNumber = (nextValue === "0" || nextValue === "" ? String(number) : nextValue + number);
      setNext(currNumber);
      setFormola(formola + number);
    };

    const handleSigns = (value) => {
      if (value === "AC") {
        reset();
      } else if (value === "\xB1") {
        changeSign();
      } else if (value === ".") {
        insertDot();
      } else if (value === "%") {
        percentage();
      }
    };
 
    const handleNextMove = (value) => {
      if (Number.isInteger(value)) {
        handleNumer(parseInt(value, 10));
      } 
      else if (value in CalculatorActions) {
        console.log("next action is ", value);
        console.log("prev value is ", prevValue);
        setPrev(nextValue);
        setNext("");
        setAction(value);
        setFormola(formola + value);
      } else {
        handleSigns(value);
      }
    };

    const performAction = () => {
      if (prevValue && nextValue && action){
        setNext(String(
          CalculatorActions[action](
            parseFloat(prevValue),
            parseFloat(nextValue)
        )));
        setPrev(null);
        setAction(null);
      }
    };
    
    performAction();
    return(
        <div className="site-card-border-less-wrapper">
        <Card className="calculator-header" extra={formola}>
          <h2>{nextValue !== "" ? nextValue : prevValue}</h2>
        </Card>
        <Card type="inner" className="calculator" bordered={false}>
            <CalcButtonDisplay 
            calcButtons={calcButtons} 
            handleNextMove={handleNextMove}
            />
        </Card>
      </div>
    )
};

export default Calculator;
