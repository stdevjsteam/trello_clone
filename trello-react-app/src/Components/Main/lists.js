import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './list';


class Lists extends Component {
 

  render() {
    return (
      (this.props.listOrder.length !==0) &&
      this.props.listOrder.listPositions.map((order, index) =>
      {
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

const mapStateToProps = state => {
  return {
    lists: state.lists,
    positions: state.cardsPositions,
    listOrder: state.listOrder,
  }
}

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Lists);


