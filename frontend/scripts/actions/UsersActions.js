import alt from './../alt.js';
import _ from 'lodash';

class UsersActions {
    add({name}) {
        this.dispatch(_.extend({id : _.uniqueId()}, {name}));
    }
}

export default alt.createActions(UsersActions);
