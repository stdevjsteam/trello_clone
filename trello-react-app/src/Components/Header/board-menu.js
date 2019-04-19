import React, { Component } from 'react';
import SearchField from './search-field';

class BoardMenu extends Component {
    render() {
        return (
            <div className="boards-menu">

                <button className="boards-btn btn"><i className="fab fa-trello boards-btn-icon"></i>Boards</button>
                <SearchField />
            </div>
        )

    }
}

export default BoardMenu;