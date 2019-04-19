import React, { Component } from 'react';

class ShowMenu extends Component {
    render() {
        return (
            <button className="menu-btn btn"><i class="fas fa-ellipsis-h menu-btn-icon" aria-hidden="true"></i>Show Menu</button>
        );
    }
}

export default ShowMenu;