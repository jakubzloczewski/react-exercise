import React from 'react';

class GroupsListItem extends React.Component {
    render() {
        const {name} = this.props.group;

        return (
            <div>{name}</div>
        );
    }
}

export default GroupsListItem;