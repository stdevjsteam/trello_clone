import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './list';
import PropTypes from 'prop-types';

class Lists extends Component {


  render() {
    return (
      Object.keys(this.props.listOrder).length !== 0 &&
      this.props.listOrder.listPositions.map((order, index) => {
        const current = this.props.lists.find((item) => item.id === order);
        return <List
          currentList={current}
          key={index}
          uniqueKey={index + 1}
        />
      }
      )
    );
  }
}

Lists.propTypes = {
  listOrder: PropTypes.object,
  lists: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = state => {
  return {
    lists: state.lists,
    listOrder: state.listOrder,
  }
}

export default connect(
  mapStateToProps,
  null,
)(Lists);


