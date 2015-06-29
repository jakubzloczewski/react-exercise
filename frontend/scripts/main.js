import './../main.less';

import React from 'react';

import UsersStore from './stores/UsersStore.js';
import GroupsStore from './stores/GroupsStore.js';

import AddUserForm from './components/AddUserForm.js';

import UsersList from './components/UsersList.js';
import GroupsList from './components/GroupsList.js';


const getAppState = function () {
    return {
        UsersStore: UsersStore.getState(),
        GroupsStore: GroupsStore.getState()
    };
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = getAppState();
    }

    componentDidMount() {
        UsersStore.listen(this.onChange.bind(this));
        GroupsStore.listen(this.onChange.bind(this));

    }

    componentWillUnmount() {
        UsersStore.unlisten(this.onChange.bind(this));
        GroupsStore.unlisten(this.onChange.bind(this));
    }

    onChange() {
        this.setState(getAppState());
    }

    render() {
        const {UsersStore, GroupsStore} = this.state;
        return (
            <div>
                <AddUserForm/>
                <UsersList UsersStore={UsersStore}/>
                <GroupsList GroupsStore={GroupsStore}/>
            </div>
        );
    }
}

React.render(<App/>, document.getElementById("app"));
