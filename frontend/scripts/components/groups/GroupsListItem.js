import React from 'react';

class GroupsListItem extends React.Component {
    render() {
        const {group, assignments} = this.props;
        const {name, id} = group;

        const groupInUse = _.isEmpty(_.select(assignments, {groupId: id}));

        return (
            <div>
                {name}
                <input type="button"
                    value="remove group"
                    onClick={this.removeGroup.bind(this)}
                    disabled={!groupInUse}/>
            </div>
        );
    }

    removeGroup() {
    }
}

export default GroupsListItem;