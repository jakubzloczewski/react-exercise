import React from 'react';

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

export default UserGroup;
