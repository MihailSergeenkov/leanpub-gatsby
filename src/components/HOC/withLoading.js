import React from 'react';

const withLoading = (EnhancedComponent) => (
  function withLoading(props) {
    return (
      props.isLoading 
        ? <div>Loading...</div>
        : <EnhancedComponent {...props} />
    );
  }
);

export default withLoading;
