import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  root: {
    margin: '10px 0px',
  },
  imageBox: {
    maxWidth: '50px',
  },
  image: {
    width: '100%',
  },
  author: {
    margin: '0px 0px 10px',
    color: 'gray',
  },
};

const SimilarBookCard = ({ book: { name, author, image }, handleClick }) => (
  <div style={styles.root}>
    <div style={styles.imageBox}>
      <img style={styles.image} src={image} alt={name} />
    </div>
    <div>{name}</div>
    <h6 style={styles.author}>{author}</h6>
    <button onClick={handleClick(name)}>Don&apos;t show</button>
  </div>
);

SimilarBookCard.propTypes = {
  book: PropTypes.exact({
    name: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
  }),
  handleClick: PropTypes.func,
};

export default SimilarBookCard;
