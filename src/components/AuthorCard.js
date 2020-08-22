import React from 'react';
import PropTypes from 'prop-types';

import UserCard from './UserCard';

const styles = {
  root: {
    margin: '10px 0px',
  },
  information: {
    margin: '0px 0px 10px',
    color: 'gray',
  },
};

const AuthorCard = ({ author }) => {
  if (!author)
    return <div>Empty author</div>;

  const { 
    fullName,
    email,
    avatar,
    information,
  } = author;
  
  return (
    <div style={styles.root}>
      <UserCard fullName={fullName} email={email} avatar={avatar} />
      <h6 style={styles.information}>{information}</h6>
    </div>
  );
};

AuthorCard.propTypes = {
  author: PropTypes.exact({
    fullName: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
    information: PropTypes.string
  })
};

export default AuthorCard;
