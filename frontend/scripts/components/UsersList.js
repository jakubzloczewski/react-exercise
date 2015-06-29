import React from 'react';

import UsersListItem from './UsersListItem.js';

class UsersList extends React.Component {
    render() {
        const {users} = this.props.UsersStore;

        return (
            <div>
                <h2>Users: </h2>
                {users.map(u => {
                    return <UsersListItem key={u.id} user={u}/>
                })}
            </div>
        );
    }
}

export default UsersList;