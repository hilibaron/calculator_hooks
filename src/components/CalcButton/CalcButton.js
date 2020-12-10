import "./CalcButton.css";
import { Button } from 'antd';
import PropTypes from 'prop-types'

function CalcButton({ className, buttonText, onClick }) {
  return (
    <Button 
      type="primary"
      size={10}
      className={`${className}`}
      onClick={() => onClick(buttonText)}
    >
    {buttonText}
    </Button>
  );
};

export default CalcButton;

CalcButton.propTypes = {
  buttonText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
};