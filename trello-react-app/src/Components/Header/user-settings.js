import React, { Component } from 'react';

class UserSettings extends Component {
    render() {
        return (
            <div className="user-settings">

                <button className="user-settings-btn btn" aria-label="Create">
                    <i className="fas fa-plus" aria-hidden="true"></i>
                </button>

                <button className="user-settings-btn btn" aria-label="Information">
                    <i className="fas fa-info-circle" aria-hidden="true"></i>
                </button>

                <button className="user-settings-btn btn" aria-label="Notifications">
                    <i className="fas fa-bell" aria-hidden="true"></i>
                </button>

                <button className="user-settings-btn btn" aria-label="User Settings">
                    <i className="fas fa-user-circle" aria-hidden="true"></i>
                </button>

            </div>
        );
    }
}

export default UserSettings;