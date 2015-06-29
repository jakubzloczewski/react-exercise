import React from 'react';
import AssignmentsActions from './../actions/AssignmentsActions.js';
import UsersActions from './../actions/UsersActions.js';

import GroupPicker from './GroupPicker.js';
import UserGroups from './UserGroups.js';

class UsersListItem extends React.Component {
    render() {
        const {user, groups, assignments} = this.props;
        const {name, id} = user;

        const userGroupsIds = _.chain(assignments).select({userId: id}).pluck('groupId').value();
        const userGroups = _.select(groups, g => {
            return _.contains(userGroupsIds, g.id);
        });


        return (
            <div>
                <div>Name : {name}</div>
                <UserGroups groups={userGroups} onRemove={this.removeFromGroup.bind(this)}/>
                <GroupPicker groups={groups} onSelect={this.addToGroup.bind(this)}/>
                <input type="button" value="remove user" onClick={this.removeUser.bind(this)}/>
            </div>
        );
    }

    addToGroup(groupId) {
        AssignmentsActions.add({userId: this.props.user.id, groupId});
    }

    removeFromGroup(groupId) {
        AssignmentsActions.remove({userId: this.props.user.id, groupId});
    }

    removeUser() {
        UsersActions.remove(this.props.user.id);
    }
}

export default UsersListItem;