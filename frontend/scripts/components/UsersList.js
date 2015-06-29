import React from 'react';


class UsersList extends React.Component {
    render() {
        const {users} = this.props.UsersStore;

        return (
            <div>
                <h2>Users: </h2>
            {users.map(u => {
                return <div key={u.id}>{u.name}</div>
            })}
            </div>
        );
    }
}

export default UsersList;