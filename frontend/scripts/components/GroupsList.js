import React from 'react';

import GroupsListItem from './GroupsListItem.js';

class GroupsList extends React.Component {
    render() {
        const {groups} = this.props.GroupsStore;

        return (
            <div>
                <h2>Groups: </h2>
                {groups.map(u => {
                    return <GroupsListItem key={u.id} group={u}/>
                })}
            </div>
        );
    }
}

export default GroupsList;