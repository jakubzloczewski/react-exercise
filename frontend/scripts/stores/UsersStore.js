import alt from './../alt.js';
import _ from 'lodash';
import UsersActions from './../actions/UsersActions.js';

class UsersStore {
    constructor() {
        this.bindActions(UsersActions);
        this.fetching = null;
        this.users = [{id: _.uniqueId(), name: 'User 1'}, {id: _.uniqueId(), name: 'User 2'}];
    }

    add(user) {
        this.users.push(user);
    }
}

export default alt.createStore(UsersStore, 'UsersStore');
