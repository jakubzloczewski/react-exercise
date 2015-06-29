import alt from './../alt.js';

class UsersActions {
    add({name}) {
        this.dispatch({name});
    }
}

export default alt.createActions(UsersActions);
