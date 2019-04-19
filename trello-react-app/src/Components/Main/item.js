import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Item extends Component {
  render() {
    return (
      <div>
        <li>
          {this.props.item.name}
        </li>
        {this.props.item && this.props.cardUsers[this.props.item.id - 1].users.map((userId, index) => {
          return <span key={index}>{this.props.users.find((user) => user.id === userId).label[0].toUpperCase()}</span>
        })}
      </div>
    )
  }
}

Item.propTypes = { 
  cardUsers: PropTypes.arrayOf(PropTypes.object),
  users:  PropTypes.arrayOf(PropTypes.object),
  item: PropTypes.object, 
}

const mapStateToProps = state => {
  return {
    cardUsers: state.cardUsers,
    users: state.users,
  }
}

export default connect(
  mapStateToProps,
  null
)(Item);