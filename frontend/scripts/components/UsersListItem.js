import React from 'react';
import GroupPicker from './GroupPicker.js';
import AssignmentsActions from './../actions/AssignmentsActions.js';
import UsersActions from './../actions/UsersActions.js';

class UserGroup extends React.Component {
    render() {
        const {group} = this.props;
        return (
            <div>
                <span>{group.name}</span>
                <input type="button" value="remove from group" onClick={this.onRemove.bind(this)}/>
            </div>);
    }

    onRemove() {
        this.props.onRemove(this.props.group.id);
    }
}

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