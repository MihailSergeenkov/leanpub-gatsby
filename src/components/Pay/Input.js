import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Input = ({ minimumPrice, currentPay, handleChange }) => {
  const refInput = useRef(null);

  useEffect(() => {
    refInput.current.focus();
  }, []);

  return (
    <input 
      type='number' 
      min={minimumPrice} 
      value={currentPay}
      onChange={handleChange}
      ref={refInput}
    />
  );
};

Input.propTypes = {
  minimumPrice: PropTypes.number,
  currentPay: PropTypes.number,
  handleChange: PropTypes.func,
};

export default Input;
