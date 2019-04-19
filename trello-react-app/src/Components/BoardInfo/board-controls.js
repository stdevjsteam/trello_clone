import React, { Component } from 'react';
import Modal from 'react-modal';
import AddNewUser from './addNewUser';

class BoardControls extends Component {

    state = {
        modalIsOpen: false,
    }

    openModal = () => {
        this.setState({
            modalIsOpen: true,
        });
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false,
        })
    }

    render() {
        return (
            <div className="board-controls">

                <button className="board-title btn">
                    <h2>Web Development</h2>
                </button>

                <button className="star-btn btn" aria-label="Star Board">
                    <i className="far fa-star" aria-hidden="true"></i>
                </button>

                <button className="personal-btn btn">Personal</button>

                <button className="private-btn btn"><i className="fas fa-briefcase private-btn-icon" aria-hidden="true"></i>Private</button>

                <button className="personal-btn btn" onClick={this.openModal}>Add User</button>
                <Modal
                    ariaHideApp={false}
                    className="Modal"
                    overlayclassName="Overlay"
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                >
                    <AddNewUser closeModal={this.closeModal} />
                </Modal>
            </div>
        );
    }
}

export default BoardControls;