import React, { Component } from 'react';
import Lists from './lists';
import { connect } from 'react-redux';
import AddNewList from './addNewList';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { updateArray } from '../../store/actions/products';
import { updateListOrder } from '../../store/actions/listOrder';
import PropTypes from 'prop-types';

class Main extends Component {
  onDragEnd = (response) => {
    if (response.destination === null) {
      return;
    }
    if (response.type === 'listDrop') {
      this.props.updateListOrder(
        this.props.listOrder.listPositions,
        response.source.index,
        response.destination.index
      );
    }
    if (response.type === 'cardDrop') {
      console.log(response);
      this.props.updateArray(
        this.props.positions[response.source.droppableId - 1].positionsArray,
        this.props.positions[response.destination.droppableId - 1].positionsArray,
        response.source.index,
        response.destination.index,
        response.source.droppableId,
        response.destination.droppableId
      )
    }
    return;
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable
          droppableId="ListDroppable"
          direction="horizontal"
          type="listDrop"
        >
          {provided => (

            <section
              className="lists-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <Lists />
              {provided.placeholder}
              <AddNewList />
            </section>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

Main.propTypes = {
  updateArray: PropTypes.func,
  updateListOrder: PropTypes.func,
  listOrder: PropTypes.object,
  positions: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = state => {
  return {
    listOrder: state.listOrder,
    positions: state.cardsPositions,
  }
}

const mapDispatchToProps = {
  updateArray,
  updateListOrder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);