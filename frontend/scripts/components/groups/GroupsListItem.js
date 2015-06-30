import React from 'react';

import GroupsActions from './../../actions/GroupsActions.js';

import Button from './../common/Button.js';
import Paper from './../common/Paper.js';

class GroupsListItem extends React.Component {
    render() {
        const {group, assignments} = this.props;
        const {name, id} = group;

        const groupInUse = _.isEmpty(_.select(assignments, {groupId: id}));

        return (
            <Paper style={{width: '250px', display: 'inline-block'}}>
                <div>Name: {name}</div>
                <div style={{textAlign: 'right'}}>
                    <Button
                        label="remove group"
                        onClick={this.removeGroup.bind(this)}
                        disabled={!groupInUse}/>
                </div>
            </Paper>
        );
    }

    removeGroup() {
        GroupsActions.remove(this.props.group.id);
    }
}

export default GroupsListItem;