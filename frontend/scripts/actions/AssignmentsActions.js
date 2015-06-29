import alt from './../alt.js';
import _ from 'lodash';

class UsersActions {
    add({groupId, userId}) {
        this.dispatch({groupId, userId});
    }
    remove({groupId, userId}) {
        this.dispatch({groupId, userId});
    }
}

export default alt.createActions(UsersActions);
