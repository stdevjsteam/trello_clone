import React, { Component } from 'react';
import NewUserForm from '../Forms/newUserForm';
import { addNewUser } from '../../store/actions/users';
import { connect } from 'react-redux';

export class AddNewUser extends Component {

  handleSubmit = (value) => {
    this.props.addNewUser(value);
    this.props.closeModal();
  }

  render() {
    return (
      <NewUserForm onSubmit={this.handleSubmit}/>
    )
  }
}

const mapDispatchToProps = {
  addNewUser, 
};

export default connect(
  null,
  mapDispatchToProps,
  )(AddNewUser);
