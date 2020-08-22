import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  root: {
    maxWidth: '200px',
  },
  image: {
    width: '100%',
  },
};

const Image = ({ alt, src }) => (
  <div style={styles.root}>
    <img style={styles.image} src={src} alt={alt} />
  </div>
);

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
};

export default Image;
