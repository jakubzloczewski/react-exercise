import React from 'react';

import GroupsListItem from './GroupsListItem.js';
import Paper from './../common/Paper.js';

class GroupsList extends React.Component {
    render() {
        const {groups} = this.props.GroupsStore;
        const {assignments} = this.props.AssignmentsStore;

        return (
            <Paper>
                {this.props.children}
                <h2>Groups: </h2>
                {groups.map(u => {
                    return <GroupsListItem key={u.id} group={u} assignments={assignments}/>
                })}
            </Paper>
        );
    }
}

export default GroupsList;