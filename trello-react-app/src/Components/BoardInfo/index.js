import React, { Component } from 'react';
import BoardControls from './board-controls';
import ShowMenu from './show-menu';

class BoardInfo extends Component {
    render() {
        return(
            <section className="board-info-bar">
                <BoardControls />
                <ShowMenu />
            </section>
        )
    }
}

export default BoardInfo;