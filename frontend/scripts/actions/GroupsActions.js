import alt from './../alt.js';

class GroupsActions {
    add(group) {
        this.dispatch(_.extend({id: _.uniqueId()}, group));
    }
}

export default alt.createActions(GroupsActions);
