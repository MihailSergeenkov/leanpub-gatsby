import React from 'react';
import PropTypes from 'prop-types';

import AuthorCard from './AuthorCard';

const styles = {
  root: {
    margin: '10px 0px',
  },
};

class AuthorsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAll: false,
    };

    this.toggleShowAll = this.toggleShowAll.bind(this);
  }

  toggleShowAll = () => {
    this.setState((prevState) => (
      {
        showAll: !prevState.showAll
      }
    ));
  };

  render() {
    const { authors } = this.props;

    if (!authors)
      return <div>Empty authors</div>;

    const showedAuthors = 
      this.state.showAll ? authors : authors.slice(0, 3);

    return (
      <div style={styles.root}>
        {
          showedAuthors.map((author) => (
            <div key={author.email}>
              <AuthorCard author={author} />
            </div>
          ))
        }
        <button onClick={this.toggleShowAll}>Show all</button>
      </div>
    );
  }
}

AuthorsList.propTypes = {
  authors: PropTypes.array,
};

export default AuthorsList;
