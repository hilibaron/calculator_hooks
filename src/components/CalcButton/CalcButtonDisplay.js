import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import CalcButton from '../CalcButton/CalcButton';


function CalcButtonDisplay (props) {
    const {calcButtons, handleNextMove} = props;
    return (
        <div>
            <Row gutter={16}>
                {calcButtons.map((calcButton) => (
                    <Col key={calcButton.toString()}>
                        <CalcButton
                            className={calcButton !== 0 ? "regular-button" : "zero-button"}
                            keyValue={calcButton}
                            onClick={handleNextMove} 
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default CalcButtonDisplay;

CalcButtonDisplay.propTypes = {
calcButtons: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
]))
};
