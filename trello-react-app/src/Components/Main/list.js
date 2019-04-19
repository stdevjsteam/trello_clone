import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewItemForm from '../Forms/newItemForm';
import { updateData } from '../../store/actions/data';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import EditList from './editList';
import Item from './item';
import { getCurrentCard } from '../../store/actions/currentCard';
import Modal from 'react-modal';
import { deleteCurrentCard } from '../../store/actions/currentCard';
import PropTypes from 'prop-types';


class List extends Component {
  state = {
    addingCard: false,
    modalIsOpen: false,
  }

  handleClick = () => {
    this.setState({
      addingCard: true,
    })
  }

  handleSubmit = (value, id) => {
    value.listId = id;
    this.props.updateData(value, "CARD");
    this.setState({
      addingCard: false,
    })

  }

  openModal = (event) => {
    this.props.getCurrentCard(event.currentTarget.getAttribute('cardid'));
    this.setState({
      modalIsOpen: true,
    })
  }

  closeModal = () => {
    this.props.deleteCurrentCard();
    this.setState({
      modalIsOpen: false,
    })
  }

  render() {
    const listPosition = this.props.positions.find((item) => {
      return item.listId === this.props.currentList.id;
    });
    return (
      (this.props.positions.length !== 0
        && this.props.cards.length !== 0
        && listPosition) && (
        <>
          <Draggable
            draggableId={`dragUl-${this.props.uniqueKey}`}
            index={this.props.uniqueKey - 1}
            key={this.props.currentList.id}
          >
            {provided => (
              <div
                className="list"
                ref={provided.innerRef}
                {...provided.draggableProps}
              >
                <h3 className="list-title"
                  {...provided.dragHandleProps}
                >{this.props.currentList.name}</h3>
                <Droppable
                  droppableId={this.props.currentList.id}
                  type="cardDrop"
                >
                  {provided => (
                    <ul className="list-items"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {listPosition.positionsArray.map((cardid, index) => {
                        const item = this.props.cards.find((card) => card.id === cardid);
                        if (item === undefined) {
                          return;
                        }
                        return <Draggable
                          draggableId={`dragLi-${this.props.currentList.id}-${index}`}
                          index={index}
                          key={index}
                        >
                          {provided => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              onClick={this.openModal}
                              cardid={cardid}
                            >
                              <Item
                                key={index}
                                item={item}
                              />
                            </div>
                          )
                          }
                        </Draggable>
                      })
                      }
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>

                {this.state.addingCard
                  ? (<NewItemForm onSubmit={(value) => this.handleSubmit(value, this.props.currentList.id)}
                  />)
                  : (<button className="add-card-btn btn" onClick={this.handleClick}>Add a card</button>)
                }
              </div>
            )}
          </Draggable>
          {Object.keys(this.props.currentCard).length !== 0
            &&
            <Modal
              ariaHideApp={false}
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              className="Modal"
              overlayclassName="Overlay"
              contentLabel="Example Modal"
            >
              <EditList closeModal={this.closeModal} />
            </Modal>}
        </>
      )
    )
  }
}

List.propTypes = {
  getCurrentCard: PropTypes.func,
  deleteCurrentCard: PropTypes.func,
  updateData: PropTypes.func,
  positions: PropTypes.arrayOf(PropTypes.object),
  currentCard: PropTypes.object,
  currentList: PropTypes.object,
  uniqueKey: PropTypes.number,
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    positions: state.cardsPositions,
    currentCard: state.currentCard,
  }
}

const mapDispatchToProps = {
  updateData,
  getCurrentCard,
  deleteCurrentCard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);