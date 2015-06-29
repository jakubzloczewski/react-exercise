import React from 'react';

import UsersActions from './../actions/UsersActions.js';

class AddUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onChange.bind(this)}/>
                <input type="button" value="add user" onClick={this.onAdd.bind(this)}/>
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