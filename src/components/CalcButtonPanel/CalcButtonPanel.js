import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import CalcButton from '../CalcButton/CalcButton';


function CalcButtonPanel ({calcButtons, operations}) {
    return (
        <div>
            <Row gutter={16}>
                {calcButtons.map(calcButton => (
                    <Col key={calcButton.toString()}>
                        <CalcButton
                            className={calcButton !== 0 ? "regular-button" : "zero-button"}
                            buttonText={calcButton}
                            onClick={operations[calcButton]} 
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default CalcButtonPanel;

CalcButtonPanel.propTypes = {
calcButtons: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
])),
// operations: PropTypes.shape({
//     "": PropTypes.arrayOf(/* your type here, eg: PropTypes.number */),
//   }) need to be continued 
};
