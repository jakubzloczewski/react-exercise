import React from 'react';

import TextInput from './../common/TextInput.js';
import Button from './../common/Button.js';

import UsersActions from './../../actions/UsersActions.js';

class AddUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
    }

    render() {
        const disabled = _.isEmpty(this.state.name);

        return (
            <div>
                <TextInput onChange={this.onChange.bind(this)}/>
                <Button label="add user" onClick={this.onAdd.bind(this)} disabled={disabled}/>
            </div>
        );
    }

    onChange(ev) {
        this.setState({name: ev.target.value});
    }

    onAdd() {
        UsersActions.add({
            name: this.state.name
        });
    }
}

export default AddUserForm;
