import './Calculator.css';
import { Card } from 'antd';
import { useState } from 'react';
import CalcButtonDisplay from '../CalcButton/CalcButtonDisplay';

function Calculator() {

    const [prevValue, setPrev] = useState(null);
    const [nextValue, setNext] = useState("0");
    const [formola, setFormola] = useState("");
    const [action, setAction] = useState(null);
    const [displayValue, setDisplay] = useState("");

    const percDivison = 100;
    const singMulti = -1;

    const calcButtons = ["AC", "\xB1", "%", "+", 7, 8, 9,
     "-", 4, 5, 6, "*", 1, 2, 3, "/", 0, ".", "="];
    
    const CalculatorActions = {
      "/": (firstValue, secondValue) => firstValue / secondValue,
      "*": (firstValue, secondValue) => firstValue * secondValue,
      "+": (firstValue, secondValue) => firstValue + secondValue,
      "-": (firstValue, secondValue) => firstValue - secondValue,
    };

    const handleResult = () => {
      let result = String(
        CalculatorActions[action](
        parseFloat(prevValue),
        parseFloat(nextValue)
      ));
      setPrev(null);
      setNext(result);
      setAction(null);
      setFormola(formola + "=" + result);
    }
    
    const handleAction = (value) => {
        if (action) {
          setPrev(String(
            CalculatorActions[action](
            parseFloat(prevValue),
            parseFloat(nextValue)
          )));
          setDisplay(nextValue)
          setNext("");
        }
        else{
          setPrev(nextValue);
          setDisplay(nextValue)
          setNext("");
        }
        setFormola(formola + value);
        setAction(value);
    };
  
    const insertDot = () => {
      if (!/\./.test(nextValue)) {
        setNext(nextValue + ".");
        setFormola(nextValue+ ".");
      }
    };

    const percentage = () => {
      let nextVal = parseFloat(nextValue) / percDivison;
      setNext(nextVal);
      setFormola(nextVal);
      if (prevValue && nextValue === "") {
        setPrev(parseFloat(prevValue) / percDivison);
      }
    };

    const changeSign = () => {
      let nextVal = parseFloat(nextValue) * singMulti;
      setNext(nextVal);
      setFormola(nextVal);
    };
    
    const reset = () => {
      setNext("0");
      setPrev(0);
      setFormola("");
    };
  
    const handleNumer = (number) => {
      setNext((nextValue === "0" || nextValue === "" ? String(number) : nextValue + number));
      setFormola(formola + number);
      console.log(nextValue);
    };

    const operations = {
      "AC": reset, "\xB1": changeSign, ".": insertDot, "%": percentage, "=": handleResult,
      0: handleNumer, 1: handleNumer, 2: handleNumer, 3: handleNumer, 4: handleNumer,
      5: handleNumer, 6: handleNumer, 7: handleNumer, 8: handleNumer, 9: handleNumer,
      "+": handleAction, "-": handleAction, "/": handleAction, "*": handleAction, 
    };

    return(
        <div className="site-card-border-less-wrapper">
        <Card className="formola">
          <p>{formola}</p>
        </Card>
        <Card className="calculator-header">
          <h2>{nextValue || displayValue}</h2>
        </Card>
        <Card type="inner" className="calculator" bordered={false}>
            <CalcButtonDisplay 
            calcButtons={calcButtons} 
            operations={operations}
            />
        </Card>
      </div>
    )
};

export default Calculator;
