import './Calculator.css';
import { Card } from 'antd';
import { useState } from 'react';
import CalcButtonPanel from '../CalcButtonPanel/CalcButtonPanel';
import CalcFormulaDisplay from '../CalcFormulaDisplay/CalcFormulaDisplay';

function Calculator() {

    const [prevValue, setPrev] = useState(null);
    const [nextValue, setNext] = useState("0");
    const [formola, setFormola] = useState("");
    const [action, setAction] = useState(null);
    const [displayValue, setDisplay] = useState("");

    const calcButtons = ["AC", "\xB1", "%", "+", 7, 8, 9,
     "-", 4, 5, 6, "*", 1, 2, 3, "/", 0, ".", "="];
    
    const CalculatorActions = {
      "/": (firstValue, secondValue) => firstValue / secondValue,
      "*": (firstValue, secondValue) => firstValue * secondValue,
      "+": (firstValue, secondValue) => firstValue + secondValue,
      "-": (firstValue, secondValue) => firstValue - secondValue,
    };

    const perforemAction = () => {
      return (
          String(CalculatorActions[action]
          (parseFloat(prevValue),
          parseFloat(nextValue)))
      );
    };

    const handleResult = () => {
      const result = perforemAction();
      console.log(result);
      setPrev(null);
      setNext(result);
      setAction(null);
      setFormola(formola + "=" + result);
    }
    
    const handleAction = value => {
      if (action) {
        setPrev(perforemAction());
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
      const nextVal = parseFloat(nextValue) / 100;
      setNext(nextVal);
      setFormola(nextVal);
      if (prevValue && nextValue === "") {
        setPrev(parseFloat(prevValue) / 100);
      }
    };

    const changeSign = () => {
      const nextVal = parseFloat(nextValue) * (-1);
      setNext(nextVal);
      setFormola(nextVal);
    };
    
    const reset = () => {
      setNext("0");
      setPrev(0);
      setFormola("");
    };
  
    const handleNumer = number => {
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
        <CalcFormulaDisplay 
            formola={formola} 
            nextValue={nextValue} 
            displayValue={displayValue}
        />
        <Card type="inner" className="calculator-panel" bordered={false}>
            <CalcButtonPanel 
            calcButtons={calcButtons} 
            operations={operations}
            />
        </Card>
      </div>
    )
};

export default Calculator;

CalcButtonPanel.propTypes = {};
  