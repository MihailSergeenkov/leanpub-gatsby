import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SimilarBookCard from './SimilarBookCard';

const styles = {
  root: {
    margin: '10px 0px',
  },
};

const SimilarBooks = ({ similarBooks }) => {
  const [books, setBooks] = useState(similarBooks);

  const handleClick = (bookName) => {
    return () => {
      setBooks(
        books.filter((book) => (
          book.name !== bookName
        ))
      );
    };
  };

  return (
    <div style={styles.root}>
      {
        books.slice(0, 3).map((book) => (
          <div key={book.image}>
            <SimilarBookCard book={book} handleClick={handleClick} />
          </div>
        ))
      }
    </div>
  );
};

SimilarBooks.propTypes = {
  similarBooks: PropTypes.array,
};

SimilarBooks.defaultProps = {
  similarBooks: [],
};

export default SimilarBooks;
