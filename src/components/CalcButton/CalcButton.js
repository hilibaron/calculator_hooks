import "./CalcButton.css";
import { Button } from 'antd';
import PropTypes from 'prop-types'

function CalcButton(props) {
  const {className, keyValue, onClick} = props;
  return (
    <Button type="primary" size={10}
      className={`${className}`}
      onClick={() => onClick(keyValue)}
    >
      {props.keyValue}{" "}
    </Button>
  );
}

export default CalcButton;

CalcButton.propTypes = {
  keyValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]) 
};