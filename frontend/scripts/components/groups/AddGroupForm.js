import React from 'react';

import TextInput from './../common/TextInput.js';
import Button from './../common/Button.js';

import GroupsActions from './../../actions/GroupsActions.js';

class AddGroupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
    }

    render() {
        const disabled = _.isEmpty(this.state.name);

        return (
            <div>
                <TextInput placeholder={'Group name ...'}
                    onChange={this.onChange.bind(this)}/>
                <Button label="add group" onClick={this.onAdd.bind(this)} disabled={disabled}/>
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