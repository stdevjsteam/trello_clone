import React, { Component } from 'react';
import BoardMenu from './board-menu';
import HeaderLogo from './logo-icon';
import UserSettings from './user-settings';

class Header extends Component {
    render() {
        return(
            <header className="masthead">
                <BoardMenu />
                <HeaderLogo />
                <UserSettings />
            </header>
        )
    }
}

export default Header;