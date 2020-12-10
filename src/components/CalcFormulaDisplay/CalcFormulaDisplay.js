import "./CalcFormulaDisplay.css";
import { Card } from 'antd';
import PropTypes from 'prop-types'

function  CalcFormulaDisplay ({ formola, nextValue, displayValue }) {
  return (
    <div>
      <Card className="formola">
          <p>{formola}</p>
      </Card>
      <Card className="calculator-header">
          <h2>{nextValue || displayValue}</h2>
      </Card>
    </div>
  );
}

export default CalcFormulaDisplay;

CalcFormulaDisplay.propTypes = {
    formola: PropTypes.string,
};