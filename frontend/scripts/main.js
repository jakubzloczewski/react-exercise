import './../main.less';

import React from 'react';

import UsersStore from './stores/UsersStore.js';
import GroupsStore from './stores/GroupsStore.js';
import AssignmentsStore from './stores/AssignmentsStore.js';

import AddUserForm from './components/users/AddUserForm.js';
import AddGroupForm from './components/groups/AddGroupForm.js';

import UsersList from './components/users/UsersList.js';
import GroupsList from './components/groups/GroupsList.js';


const getAppState = function () {
    return {
        UsersStore: UsersStore.getState(),
        GroupsStore: GroupsStore.getState(),
        AssignmentsStore: AssignmentsStore.getState()
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
        AssignmentsStore.listen(this.onChange.bind(this));

    }

    componentWillUnmount() {
        UsersStore.unlisten(this.onChange.bind(this));
        GroupsStore.unlisten(this.onChange.bind(this));
        AssignmentsStore.unlisten(this.onChange.bind(this));
    }

    onChange() {
        this.setState(getAppState());
    }

    render() {
        const {UsersStore, GroupsStore, AssignmentsStore} = this.state;

        return (
            <div>
                <UsersList UsersStore={UsersStore}
                    GroupsStore={GroupsStore}
                    AssignmentsStore={AssignmentsStore}>
                    <AddUserForm/>
                </UsersList>

                <GroupsList GroupsStore={GroupsStore}
                    AssignmentsStore={AssignmentsStore}>
                    <AddGroupForm/>
                </GroupsList>
            </div>
        );
    }
}

React.render(<App/>, document.getElementById("app"));
