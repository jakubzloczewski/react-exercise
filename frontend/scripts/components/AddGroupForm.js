import React from 'react';

import GroupsActions from './../actions/GroupsActions.js';

class AddGroupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
    }

    render() {
        const disabled = _.isEmpty(this.state.name);

        return (
            <div>
                <input type="text" onChange={this.onChange.bind(this)}/>
                <input type="button" value="add group" onClick={this.onAdd.bind(this)} disabled={disabled}/>
            </div>
        );
    }

    onChange(ev) {
        this.setState({name: ev.target.value});
    }

    onAdd() {
        GroupsActions.add({
            name: this.state.name
        });
    }
}

export default AddGroupForm;