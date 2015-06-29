import React from 'react';

import Button from './../common/Button.js';

class UserGroup extends React.Component {
    render() {
        const {group} = this.props;
        return (
            <div>
                <span>{group.name}</span>
                <Button value="remove from group" onClick={this.onRemove.bind(this)}/>
            </div>);
    }

    onRemove() {
        this.props.onRemove(this.props.group.id);
    }
}

export default UserGroup;
