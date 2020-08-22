import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  avatarBox: {
    maxWidth: '50px',
  },
  avatar: {
    width: '100%',
  },
  fullName: {
    margin: '0px',
  },
  badAvatar: {
    backgroundColor: 'grey',
    width: '100%',
    minHeight: '50px',
  }
};

const UserCard = ({ fullName, email, avatar }) => (
  <div>
    <div style={styles.avatarBox}>
      {
        avatar ? (
          <img style={styles.avatar} src={avatar} alt={fullName} />
        ) : (
          <div style={styles.badAvatar}>Empty avatar</div>
        )
      }
    </div>
    <h4 style={styles.fullName}>
      {
        email ? (
          <a href={`mailto:${email}`}>{fullName}</a>
        ) : (
          <div>{fullName}</div>
        )
      }
      
    </h4>
  </div>
);

UserCard.propTypes = {
  fullName: PropTypes.string,
  email: PropTypes.string,
  avatar: PropTypes.string,
};

export default UserCard;
