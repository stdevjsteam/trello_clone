import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {
  render() {
    return (
      <div>
        <li>
          {this.props.item.name}
        </li>
        {this.props.item.users && this.props.cardUsers[this.props.item.id - 1].users.map((userId,index) => {
          return <span key={index}>{this.props.users.find((user) => user.id === userId).label[0].toUpperCase()}</span>
        })}
      </div>
    )
  }
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