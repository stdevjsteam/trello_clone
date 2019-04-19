import React, { Component } from 'react';
import NewItemForm from '../Forms/newItemForm';
import { connect } from 'react-redux';
import { updateData } from '../../store/actions/data';

class AddNewList extends Component {
  state = {
    addingList: false,
  }

  handleSubmit = (value) => {
    this.props.updateData(value,'LIST');
    this.setState({
      addingList: false,
    })
  }

  handleClick = () => {
    this.setState({
      addingList: true,
    })
  }

  render(){
    return (
      this.state.addingList
      ?(<NewItemForm onSubmit={this.handleSubmit} />)
      :(<button className="add-card-btn btn" onClick={this.handleClick}>Add a card</button>)
    );
  }
}

const mapStateToProps = state => {
  return {
    lists: state.lists,
  }
}

const mapDispatchToProps = {
  updateData 
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(AddNewList);