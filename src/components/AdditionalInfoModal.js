import React, { useState } from 'react';
import ReactDOMServer from 'react-dom';
import PropTypes from 'prop-types';

const styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: '#fff',
    padding: '10px',
  },
};

const AdditionalInfoModal = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <a onClick={toggle}>Additional info</a>
      {
        isOpen && ReactDOMServer.createPortal(
          <div style={styles.overlay}>
            <div style={styles.body}>
              {text}
            </div>
            <button onClick={toggle}>Close</button>
          </div>,
          document.getElementById('modal-root')
        )
      }
    </>
  );
};

AdditionalInfoModal.propTypes = {
  text: PropTypes.string,
};

export default AdditionalInfoModal;
