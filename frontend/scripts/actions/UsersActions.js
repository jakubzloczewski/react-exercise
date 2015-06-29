import alt from './../alt.js';
import _ from 'lodash';

class UsersActions {
    add({name}) {
        this.dispatch(_.extend({id : _.uniqueId()}, {name}));
    }
    remove(userId) {
        this.dispatch(userId);
    }
}

export default alt.createActions(UsersActions);
