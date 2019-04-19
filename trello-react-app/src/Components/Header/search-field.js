import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../Forms/searchForm'
import { getFilteredCards } from '../../store/actions/cards';
import PropTypes from 'prop-types';

export class SearchField extends Component {

  handleSubmit = (value) => {
    this.props.getFilteredCards(value);
  }

  render() {
    return (
      <SearchForm onSubmit={this.handleSubmit} />
    );
  }
}

SearchField.propTypes = {
  getFilteredCards: PropTypes.func,
}

const mapDispatchToProps = {
  getFilteredCards
};

export default connect(
  null,
  mapDispatchToProps
)(SearchField)
