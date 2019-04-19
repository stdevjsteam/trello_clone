import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditItemForm from '../Forms/editItemForm';
import { updateCard } from '../../store/actions/cards';
import { updateUsersInCard } from '../../store/actions/cardUsers';
import Select from 'react-select';
import PropTypes from 'prop-types';

class EditList extends Component {

  handleSubmit = (value) => {
    this.props.updateCard(
      value,
      this.props.currentCard
    );
    this.props.closeModal();
  }

  handleChange = (value) => {
    if (value.target) {
      value.id = +value.target.getAttribute('userid');
    }
    this.props.updateUsersInCard(value,
      this.props.cardUsers[this.props.currentCard.id - 1]);
  }

  initialValues = () => {
    return {
      name: this.props.currentCard.name,
      description: this.props.currentCard.description || ''
    }
  }

  render() {
    return (
      <>
        {this.props.currentCard &&
          <ul className='list-items'>
            {this.props.cardUsers[this.props.currentCard.id - 1].users.map((userId, index) => {
              return <li
                userid={userId}
                key={index}
                onClick={this.handleChange}
              >
                {this.props.users[userId - 1].value}
              </li>
            })}
          </ul>
        }
        <Select options={this.props.users}
          onChange={this.handleChange} />
        <EditItemForm onSubmit={this.handleSubmit}
          initialValues={this.initialValues()} />
      </>
    );
  }
}

EditList.propTypes = {
  cardUsers: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object),
  updateCard: PropTypes.func,
  closeModal: PropTypes.func,
  updateUsersInCard: PropTypes.func,
  currentCard: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    currentCard: state.currentCard,
    users: state.users,
    cardUsers: state.cardUsers,
  }
}

const mapDispatchToProps = {
  updateCard,
  updateUsersInCard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditList);