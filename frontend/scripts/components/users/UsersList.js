import React from 'react';

import UsersListItem from './UsersListItem.js';
import Paper from './../common/Paper.js';

class UsersList extends React.Component {
    render() {
        const {groups} = this.props.GroupsStore;
        const {users} = this.props.UsersStore;
        const {assignments} = this.props.AssignmentsStore;
        return (
            <Paper>
                {this.props.children}
                <h2>Users: </h2>
                {users.map(u => {
                    return <UsersListItem key={u.id} user={u} groups={groups} assignments={assignments}/>
                })}
            </Paper>
        );
    }
}

export default UsersList;