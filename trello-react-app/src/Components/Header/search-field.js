import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../Forms/searchForm'
import { getFilteredCards } from '../../store/actions/cards';

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

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  getFilteredCards
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchField)
