import React from 'react';
import UserGroup from './UserGroup.js';

class UserGroups extends React.Component {
    render() {
        const {groups, onRemove} = this.props;
        return (
            <div>
            {groups.map(g=> <UserGroup key={g.id} group={g} onRemove={onRemove}/>)}
            </div>
        );
    }
}

export default UserGroups;
