import React from 'react';

class UsersListItem extends React.Component {
    render() {
        const {name} = this.props.user;

        return (
            <div>{name}</div>
        );
    }
}

export default UsersListItem;