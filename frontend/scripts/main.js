import './../main.less';

import React from 'react';

import UsersStore from './stores/UsersStore.js';
import UsersList from './components/UsersList.js';


const getAppState = function () {
    return {
        UsersStore: UsersStore.getState()
    };
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = getAppState();
    }

    componentDidMount() {
        UsersStore.listen(this.onChange.bind(this));
    }

    componentWillUnmount() {
        UsersStore.unlisten(this.onChange.bind(this));
    }

    onChange() {
        this.setState(getAppState());
    }

    render() {
        const {UsersStore} = this.state;
        return (
            <div>
                <UsersList UsersStore={UsersStore}/>
            </div>
        );
    }
}

React.render(<App/>, document.getElementById("app"));
