import React from 'react';

import UsersListItem from './UsersListItem.js';

class UsersList extends React.Component {
    render() {
        const {groups} = this.props.GroupsStore;
        const {users} = this.props.UsersStore;
        const {assignments} = this.props.AssignmentsStore;
        return (
            <div>
                <h2>Users: </h2>
                {users.map(u => {
                    return <UsersListItem key={u.id} user={u} groups={groups} assignments={assignments}/>
                })}
            </div>
        );
    }
}

export default UsersList;