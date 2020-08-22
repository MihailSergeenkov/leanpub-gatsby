import React from 'react';
import PropTypes from 'prop-types';

import AuthorsList from '../AuthorsList';
import AdditionalInfoModal from '../AdditionalInfoModal';

const styles = {
  root: {
    margin: '0px 20px',
    maxWidth: '200px',
  },
  title: {
    margin: '10px 0px'
  },
  description: {
    margin: '0px 0px 10px',
    color: 'gray',
  },
};

const GeneralInfo = ({ 
  name,
  description,
  authors,
  readers,
  additionalInfo,
}) => (
  <div style={styles.root}>
    <h3 style={styles.title}>{name}</h3>
    <h6 style={styles.description}>{description}</h6>
    {readers > 1000 && <h6>Popular book</h6>}
    <AdditionalInfoModal text={additionalInfo} />
    <AuthorsList authors={authors} />
  </div>
);

GeneralInfo.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  authors: PropTypes.array,
  readers: PropTypes.number,
  additionalInfo: PropTypes.string
};

export default GeneralInfo;
