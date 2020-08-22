import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ userPay }) => (
  <div>
      Author money ${(userPay * 0.9).toFixed(2)}
  </div>
);

Result.propTypes = {
  userPay: PropTypes.number,
};

export default Result;
